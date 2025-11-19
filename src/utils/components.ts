// React Imports
import { cache } from 'react'

// Third-party Imports
import type { RegistryItem } from 'shadcn/schema'

// Type Imports
import type { FileTree } from '@/types/components'

// Registry Import
import registryJson from '@/../registry.json'

const components: RegistryItem[] = (registryJson.items as RegistryItem[]).filter(
  item => item.type === 'registry:component'
)

export const getComponentsByNames = (names: string[]): RegistryItem[] => {
  const componentsMap = new Map(components.map(comp => [comp.name, comp]))

  return names.map(name => componentsMap.get(name)).filter((comp): comp is RegistryItem => comp !== undefined)
}

async function getFileContent(file: NonNullable<RegistryItem['files']>[number]) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL!}/api/get-file-content?path=${encodeURIComponent(file.path)}`
    )

    if (!response.ok) {
      const errorData = await response.json()

      console.error('API error:', errorData.error || response.statusText)
    }

    const data = await response.json()

    return data.content
  } catch (error: any) {
    console.error('Error fetching file content:', error)
    throw error
  }
}

export function getComponentStyles(component: RegistryItem): NonNullable<RegistryItem['files']>[number] {
  let styles = ''

  // Add @plugin entries first, before everything else
  if (component.css) {
    const pluginCss = Object.entries(component.css).filter(([key]) => key.startsWith('@plugin'))

    if (pluginCss.length > 0) {
      styles += pluginCss
        .map(([key, value]) => {
          if (typeof value === 'object' && value !== null && Object.keys(value).length === 0) {
            return `${key} {}`
          }

          return `${key} { ${typeof value === 'string' ? value : ''} }`
        })
        .join('\n')
    }
  }

  if (component.cssVars?.light) {
    if (styles) styles += '\n\n'

    styles += `:root {
${Object.entries(component.cssVars.light)
  .map(([key, value]) => `  --${key}: ${value};`)
  .join('\n')}
}`
  }

  if (component.cssVars?.dark) {
    if (styles) styles += '\n\n'

    styles += `.dark {
${Object.entries(component.cssVars.dark)
  .map(([key, value]) => `  --${key}: ${value};`)
  .join('\n')}
}`
  }

  if (component.cssVars?.theme) {
    if (styles) styles += '\n\n'

    styles += `@theme inline {
${Object.entries(component.cssVars.theme)
  .map(([key, value]) => `  --${key}: ${value};`)
  .join('\n')}`

    if (component.cssVars?.light) {
      styles += `\n${Object.keys(component.cssVars.light)
        .map(color => `  --color-${color}: var(--${color});`)
        .join('\n')}`
    }

    // Add keyframes from CSS object to @theme inline
    if (component.css) {
      const keyframesEntries = Object.entries(component.css).filter(([key]) => key.startsWith('@keyframes'))

      if (keyframesEntries.length > 0) {
        const formatKeyframes = (value: any): string => {
          if (typeof value === 'object' && value !== null) {
            const entries = Object.entries(value)

            if (entries.length === 0) {
              return '{}'
            }

            const keyframeRules = entries
              .map(([percentage, props]) => {
                if (typeof props === 'object' && props !== null) {
                  const properties = Object.entries(props)
                    .map(([prop, val]) => `      ${prop}: ${val};`)
                    .join('\n')

                  return `    ${percentage} {\n${properties}\n    }`
                }

                return `    ${percentage}: ${props};`
              })
              .join('\n')

            return `{\n${keyframeRules}\n  }`
          }

          return '{}'
        }

        styles += `\n\n${keyframesEntries.map(([key, value]) => `  ${key} ${formatKeyframes(value)}`).join('\n\n')}`
      }
    }

    styles += `\n}`
  }

  if (component.css) {
    const formatCssValue = (value: any, indent = 2): string => {
      if (typeof value === 'string') {
        // Direct CSS string - return as is
        return value
      }

      if (typeof value === 'object' && value !== null) {
        const entries = Object.entries(value)

        // Handle empty objects
        if (entries.length === 0) {
          return '{}'
        }

        const indentStr = ' '.repeat(indent)

        const cssRules = entries
          .map(([prop, val]) => {
            if (typeof val === 'string') {
              return `${indentStr}${prop}: ${val};`
            } else if (typeof val === 'object' && val !== null) {
              // Nested selector/rule
              const nestedEntries = Object.entries(val)

              if (nestedEntries.length === 0) {
                return `${indentStr}${prop} {}`
              }

              const nestedRules = nestedEntries
                .map(([nestedProp, nestedVal]) => `${indentStr}  ${nestedProp}: ${nestedVal};`)
                .join('\n')

              return `${indentStr}${prop} {\n${nestedRules}\n${indentStr}}`
            }

            return `${indentStr}${prop}: ${val};`
          })
          .join('\n')

        return `{\n${cssRules}\n${' '.repeat(indent - 2)}}`
      }

      return String(value)
    }

    // Filter out keyframes and plugins since they're handled separately
    const nonKeyframesAndPluginsCss = Object.entries(component.css).filter(
      ([key]) => !key.startsWith('@keyframes') && !key.startsWith('@plugin')
    )

    if (nonKeyframesAndPluginsCss.length > 0) {
      styles += `\n\n${nonKeyframesAndPluginsCss
        .map(([key, value]) => {
          if (typeof value === 'string') {
            return `${key} { ${value} }`
          }

          // Handle empty objects at the top level
          if (typeof value === 'object' && value !== null && Object.keys(value).length === 0) {
            return `${key} {}`
          }

          return `${key} ${formatCssValue(value)}`
        })
        .join('\n\n')}`
    }
  }

  return {
    path: 'styles/globals.css',
    content: styles
  } as NonNullable<RegistryItem['files']>[number]
}

export async function getComponentItem(name: string) {
  const item = components.find(component => component.name === name)

  if (!item || !item.files) {
    return null
  }

  const files: RegistryItem['files'] = []

  for (const file of item.files ?? []) {
    const content = await getFileContent(file)
    const relativePath = file.path.replace('src/', '')

    files.push({
      ...file,
      path: relativePath,
      content
    })
  }

  if (item.cssVars || item.css) {
    const stylesFile = getComponentStyles(item)

    files.push(stylesFile)
  }

  const ComponentItem: RegistryItem = {
    ...item,
    files
  }

  return ComponentItem
}

export function createFileTreeForComponentItemFiles(files: Array<{ path: string; target?: string }>) {
  const root: FileTree[] = []

  for (const file of files) {
    const path = file.target ?? file.path.replace('src/', '')
    const parts = path.split('/')
    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1
      const existingNode = currentLevel.find(node => node.name === part)

      if (existingNode) {
        if (isFile) {
          // Update existing file node with full path
          existingNode.path = path
        } else {
          // Move to next level in the tree
          currentLevel = existingNode.children!
        }
      } else {
        const newNode: FileTree = isFile ? { name: part, path } : { name: part, children: [] }

        currentLevel.push(newNode)

        if (!isFile) {
          currentLevel = newNode.children!
        }
      }
    }
  }

  return root
}

export const getCachedComponentItem = cache(async (name: string) => {
  return await getComponentItem(name)
})

export const getCachedFileTree = cache((files: Array<{ path: string; target?: string }>) => {
  if (!files) {
    return null
  }

  return createFileTreeForComponentItemFiles(files)
})
