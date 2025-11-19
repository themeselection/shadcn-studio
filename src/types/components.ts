// Third-party Imports
import type { RegistryItem } from 'shadcn/schema'

export type FileTree = {
  name: string
  path?: string
  children?: FileTree[]
}

export type ProcessedComponentsData = {
  component: RegistryItem
  tree: FileTree[] | null
}
