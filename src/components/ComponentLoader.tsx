// React Imports
import type { ComponentType } from 'react'

// Third-party Imports
import type { RegistryItem } from 'shadcn/schema'

type ComponentLoaderProps = {
  componentName: RegistryItem['name']
  category: string
}

const ComponentLoader = async <TProps extends object>({
  componentName,
  category,
  ...props
}: ComponentLoaderProps & TProps) => {
  if (!componentName) {
    return null
  }

  try {
    const Component = (await import(`@/components/shadcn-studio/${category}/${componentName}`))
      .default as ComponentType<TProps>

    return <Component {...(props as TProps)} currentPage={1} totalPages={10} />
  } catch (error) {
    console.error(`Failed to load component ${componentName}:`, error)

    return null
  }
}

export default ComponentLoader
