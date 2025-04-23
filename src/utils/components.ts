// Third-party Imports
import type { RegistryItem } from 'shadcn/registry'

// Data Imports
import registry from '@/../registry.json'

const components = registry.items as unknown as RegistryItem[]

export const getComponentsByNames = (names: string[]): RegistryItem[] => {
  const componentsMap = new Map(components.map(comp => [comp.name, comp]))

  return names.map(name => componentsMap.get(name)).filter((comp): comp is RegistryItem => comp !== undefined)
}

export const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/new-york\/ui/g, '@/components/ui')
    .replace(/@\/registry\/new-york\/compositions/g, '@/components')
    .replace(/@\/registry\/new-york\/hooks/g, '@/hooks')
    .replace(/@\/registry\/new-york\/lib/g, '@/lib')
}
