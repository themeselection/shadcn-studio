export type FileTree = {
  name: string
  path?: string
  children?: FileTree[]
}

export type ComponentProps = {
  name: string
  title?: string
  description?: string
  files: {
    path: string
    content?: string
    target?: string
  }[]
  cssVars?: {
    theme?: Record<string, string>
    light?: Record<string, string>
    dark?: Record<string, string>
  }
  css?: Record<string, string | Record<string, string | Record<string, string>>>
  isAnimated?: boolean
  badge?: 'New' | 'Updated'
  className?: string
}

export type ProcessedComponentsData = {
  component: ComponentProps
  tree: FileTree[] | null
}
