// Third-party Imports
import type { RegistryItem } from 'shadcn/schema'

// Type Imports
import type { BlockType, CategoriesType, SectionType } from '@/types/blocks'

// Registry Imports
import registry from '@/../registry.json'

// Data Imports
import { blockCategories } from '@/assets/data/blocks-index'

const blocks: RegistryItem[] = registry.items.filter(item => item.type === 'registry:block') as RegistryItem[]

export const getBlockCategory = (category: string): CategoriesType | undefined => {
  return blockCategories.find(c => c.slug === category)
}

export const getBlockSection = (category: string, section: string): SectionType | undefined => {
  return blockCategories.find(c => c.slug === category)?.sections.find(s => s.slug === section)
}

export const getSectionData = (category: string, section: string): BlockType[] => {
  const data = blocks
    .filter(b => b.meta?.category === category && b.meta?.section === section)
    .map(b => ({
      ...b.meta,
      slug: b.name,
      files: b.files,
      title: b.title,
      isNew: b.meta?.isNew
    }))

  return data as BlockType[]
}
