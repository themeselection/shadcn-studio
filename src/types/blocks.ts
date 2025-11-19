// React Imports
import type { ElementType } from 'react'

// Third-party Imports
import type { z } from 'zod'
import type { registryItemFileSchema } from 'shadcn/schema'

export type SectionType = {
  slug: string
  title: string
  description: string
  imgSrc: string
  imgAlt: string
  url: string
  isNew?: string
}

export type CategoriesType = {
  slug: string
  name: string
  title: string
  description: string
  navTitle: string
  menuIcon: ElementType
  sections: SectionType[]
  imgSrc: string
  imgAlt: string
  isNew?: boolean
}

export type BlockType = {
  title: string
  slug: string
  category: string
  section: string
  files: z.infer<typeof registryItemFileSchema>[]
  isNew?: boolean
}
