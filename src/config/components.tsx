// React Imports
import type { ComponentType, SVGProps } from 'react'

// SGV Imports
import Avatar from '@/assets/svg/Avatar'
import Badge from '@/assets/svg/Badge'
import Breadcrumb from '@/assets/svg/Breadcrumb'

export type ComponentCategory = {
  slug: string
  name: string
} & (
  | {
      components: { name: string }[]
      breakpoints?: {
        xs?: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
      }
      svg: ComponentType<SVGProps<SVGSVGElement>>
      isComingSoon?: never | false
    }
  | {
      svg?: never
      components?: never
      breakpoints?: never | undefined
      isComingSoon: true
    }
)

export const categories: ComponentCategory[] = [
  {
    slug: 'accordion',
    name: 'Accordion',
    isComingSoon: true
  },
  {
    slug: 'alert',
    name: 'Alert',
    isComingSoon: true
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    svg: Avatar,
    breakpoints: {
      sm: 2,
      lg: 3
    },
    components: [
      { name: 'avatar-01' },
      { name: 'avatar-02' },
      { name: 'avatar-03' },
      { name: 'avatar-04' },
      { name: 'avatar-05' },
      { name: 'avatar-06' },
      { name: 'avatar-07' },
      { name: 'avatar-08' },
      { name: 'avatar-09' },
      { name: 'avatar-10' },
      { name: 'avatar-11' },
      { name: 'avatar-12' },
      { name: 'avatar-13' },
      { name: 'avatar-14' },
      { name: 'avatar-15' },
      { name: 'avatar-16' },
      { name: 'avatar-17' },
      { name: 'avatar-18' },
      { name: 'avatar-19' },
      { name: 'avatar-20' },
      { name: 'avatar-21' }
    ]
  },
  {
    slug: 'badge',
    name: 'Badge',
    svg: Badge,
    breakpoints: {
      sm: 2,
      lg: 3
    },
    components: [
      { name: 'badge-01' },
      { name: 'badge-02' },
      { name: 'badge-03' },
      { name: 'badge-04' },
      { name: 'badge-05' },
      { name: 'badge-06' },
      { name: 'badge-07' },
      { name: 'badge-08' },
      { name: 'badge-09' },
      { name: 'badge-10' },
      { name: 'badge-11' },
      { name: 'badge-12' },
      { name: 'badge-13' },
      { name: 'badge-14' },
      { name: 'badge-15' },
      { name: 'badge-16' },
      { name: 'badge-17' },
      { name: 'badge-18' },
      { name: 'badge-19' },
      { name: 'badge-20' },
      { name: 'badge-21' },
      { name: 'badge-22' },
      { name: 'badge-23' },
      { name: 'badge-24' }
    ]
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    svg: Breadcrumb,
    breakpoints: {
      md: 2
    },
    components: [
      { name: 'breadcrumb-01' },
      { name: 'breadcrumb-02' },
      { name: 'breadcrumb-03' },
      { name: 'breadcrumb-04' },
      { name: 'breadcrumb-05' },
      { name: 'breadcrumb-06' },
      { name: 'breadcrumb-07' },
      { name: 'breadcrumb-08' }
    ]
  },
  {
    slug: 'button',
    name: 'Button',
    isComingSoon: true
  }
]

export function getCategory(slug: string): ComponentCategory | undefined {
  return categories.find(category => category.slug === slug)
}
