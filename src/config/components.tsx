// React Imports
import type { ComponentType, SVGProps } from 'react'

// SGV Imports
import Accordion from '@/assets/svg/Accordion'
import Alert from '@/assets/svg/Alert'
import Avatar from '@/assets/svg/Avatar'
import Badge from '@/assets/svg/Badge'
import Breadcrumb from '@/assets/svg/Breadcrumb'
import Button from '@/assets/svg/Button'
import Dropdown from '@/assets/svg/Dropdown'

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
      badge?: string
      hasAnimation?: boolean
      isComingSoon?: never | false
    }
  | {
      svg?: never
      components?: never
      breakpoints?: never | undefined
      badge?: never | undefined
      hasAnimation?: never | undefined
      isComingSoon: true
    }
)

export const categories: ComponentCategory[] = [
  {
    slug: 'accordion',
    name: 'Accordion',
    svg: Accordion,
    breakpoints: {
      md: 2
    },
    badge: 'New',
    components: [
      { name: 'accordion-01' },
      { name: 'accordion-02' },
      { name: 'accordion-03' },
      { name: 'accordion-04' },
      { name: 'accordion-05' },
      { name: 'accordion-06' },
      { name: 'accordion-07' },
      { name: 'accordion-08' },
      { name: 'accordion-09' },
      { name: 'accordion-10' },
      { name: 'accordion-11' },
      { name: 'accordion-12' },
      { name: 'accordion-13' },
      { name: 'accordion-14' },
      { name: 'accordion-15' },
      { name: 'accordion-16' }
    ]
  },
  {
    slug: 'alert',
    name: 'Alert',
    svg: Alert,
    breakpoints: {
      md: 2
    },
    badge: 'New',
    components: [
      { name: 'alert-01' },
      { name: 'alert-02' },
      { name: 'alert-03' },
      { name: 'alert-04' },
      { name: 'alert-05' },
      { name: 'alert-06' },
      { name: 'alert-07' },
      { name: 'alert-08' },
      { name: 'alert-09' },
      { name: 'alert-10' },
      { name: 'alert-11' },
      { name: 'alert-12' },
      { name: 'alert-13' },
      { name: 'alert-14' },
      { name: 'alert-15' },
      { name: 'alert-16' },
      { name: 'alert-17' },
      { name: 'alert-18' },
      { name: 'alert-19' },
      { name: 'alert-20' },
      { name: 'alert-21' },
      { name: 'alert-22' },
      { name: 'alert-23' },
      { name: 'alert-24' },
      { name: 'alert-25' },
      { name: 'alert-26' },
      { name: 'alert-27' },
      { name: 'alert-28' },
      { name: 'alert-29' },
      { name: 'alert-30' }
    ]
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
    svg: Button,
    breakpoints: {
      md: 2,
      xl: 3
    },
    badge: 'New',
    hasAnimation: true,
    components: [
      { name: 'button-01' },
      { name: 'button-02' },
      { name: 'button-03' },
      { name: 'button-04' },
      { name: 'button-05' },
      { name: 'button-06' },
      { name: 'button-07' },
      { name: 'button-08' },
      { name: 'button-09' },
      { name: 'button-10' },
      { name: 'button-11' },
      { name: 'button-12' },
      { name: 'button-13' },
      { name: 'button-14' },
      { name: 'button-15' },
      { name: 'button-16' },
      { name: 'button-17' },
      { name: 'button-18' },
      { name: 'button-19' },
      { name: 'button-20' },
      { name: 'button-21' },
      { name: 'button-22' },
      { name: 'button-23' },
      { name: 'button-24' },
      { name: 'button-25' },
      { name: 'button-26' },
      { name: 'button-27' },
      { name: 'button-28' },
      { name: 'button-29' },
      { name: 'button-30' },
      { name: 'button-31' },
      { name: 'button-32' },
      { name: 'button-33' },
      { name: 'button-34' },
      { name: 'button-35' },
      { name: 'button-36' },
      { name: 'button-37' },
      { name: 'button-38' },
      { name: 'button-39' },
      { name: 'button-40' },
      { name: 'button-41' },
      { name: 'button-42' },
      { name: 'button-43' },
      { name: 'button-44' },
      { name: 'button-45' },
      { name: 'button-46' },
      { name: 'button-47' }
    ]
  },
  {
    slug: 'button-group',
    name: 'Button Group',
    isComingSoon: true
  },
  {
    slug: 'card',
    name: 'Card',
    isComingSoon: true
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    isComingSoon: true
  },
  {
    slug: 'dropdown-menu',
    name: 'Dropdown Menu',
    svg: Dropdown,
    breakpoints: {
      sm: 2,
      md: 3
    },
    badge: 'New',
    components: [
      { name: 'dropdown-menu-01' },
      { name: 'dropdown-menu-02' },
      { name: 'dropdown-menu-03' },
      { name: 'dropdown-menu-04' },
      { name: 'dropdown-menu-05' },
      { name: 'dropdown-menu-06' },
      { name: 'dropdown-menu-07' },
      { name: 'dropdown-menu-08' },
      { name: 'dropdown-menu-09' },
      { name: 'dropdown-menu-10' },
      { name: 'dropdown-menu-11' },
      { name: 'dropdown-menu-12' },
      { name: 'dropdown-menu-13' },
      { name: 'dropdown-menu-14' },
      { name: 'dropdown-menu-15' },
      { name: 'dropdown-menu-16' }
    ]
  }
]

export function getCategory(slug: string): ComponentCategory | undefined {
  return categories.find(category => category.slug === slug)
}
