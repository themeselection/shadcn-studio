import fs from 'fs'
import path from 'path'

// Import the components registry
import { components } from '@/registry/registry-components'

// Define the base output directory
const BASE_COMPONENTS_DIR = path.join(process.cwd(), 'public', 'r', 'components')

// Ensure the base components directory exists
if (!fs.existsSync(BASE_COMPONENTS_DIR)) {
  fs.mkdirSync(BASE_COMPONENTS_DIR, { recursive: true })
}

/**
 * Read the content of a file
 * @param filePath Path to the file
 * @returns Content of the file or null if the file doesn't exist
 */
const readFileContent = (filePath: string): string | null => {
  try {
    const absolutePath = path.join(process.cwd(), filePath)

    if (fs.existsSync(absolutePath)) {
      return fs.readFileSync(absolutePath, 'utf8')
    }

    console.warn(`File not found: ${filePath}`)

    return null
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)

    return null
  }
}

/**
 * Generate registry files for each block
 */
const generateComponentsRegistry = () => {
  // Process each component in the registry
  components.forEach(component => {
    // Process files to include content
    const filesWithContent = (component.files || []).map(file => {
      // Read the file content
      const content = readFileContent(file.path)

      // Return the file object with content
      return {
        path: file.path,
        content: content || '// File not found',
        type: file.type,
        target: file.target
      }
    })

    // Create a registry item for the component
    const registryItem = {
      $schema: 'https://ui.shadcn.com/schema/registry-item.json',
      name: component.name,
      type: component.type,
      ...(component.title ? { title: component.title } : {}),
      ...(component.description ? { description: component.description } : {}),
      ...(component.dependencies ? { dependencies: component.dependencies } : {}),
      ...(component.devDependencies ? { devDependencies: component.devDependencies } : {}),
      ...(component.registryDependencies ? { registryDependencies: component.registryDependencies } : {}),
      files: filesWithContent || [],
      ...(component.tailwind ? { tailwind: component.tailwind } : {}),
      ...(component.cssVars ? { cssVars: component.cssVars } : {}),
      ...(component.css ? { css: component.css } : {})
    }

    // Create the file path
    const filePath = path.join(BASE_COMPONENTS_DIR, `${component.name}.json`)

    // Write the registry item to a JSON file
    fs.writeFileSync(filePath, JSON.stringify(registryItem, null, 2))
    console.log(`Generated registry file for component: ${component.name}`)
  })

  console.log(`Generated registry files for ${components.length} components`)
}

// Execute the function
generateComponentsRegistry()
