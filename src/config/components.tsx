// React Imports
import type { ComponentType, ReactNode, SVGProps } from 'react'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import { CircleAlertIcon } from 'lucide-react'

// Component Imports
import { Alert, AlertDescription } from '@/components/ui/alert'

// SGV Imports
import AccordionSVG from '@/assets/svg/accordion'
import AlertSVG from '@/assets/svg/alert'
import AvatarSVG from '@/assets/svg/avatar'
import BadgeSVG from '@/assets/svg/badge'
import BreadcrumbSVG from '@/assets/svg/breadcrumb'
import ButtonSVG from '@/assets/svg/button'
import ButtonGroupSVG from '@/assets/svg/button-group'
import CalendarSVG from '@/assets/svg/calendar'
import CardSVG from '@/assets/svg/card'
import CheckboxSVG from '@/assets/svg/checkbox'
import CollapsibleSVG from '@/assets/svg/collapsible'
import ComboboxSVG from '@/assets/svg/combobox'
import DataTableSVG from '@/assets/svg/data-table'
import DatepickerSVG from '@/assets/svg/datepicker'
import DialogSVG from '@/assets/svg/dialog'
import DropdownSVG from '@/assets/svg/dropdown'
import FormSVG from '@/assets/svg/form'
import InputSVG from '@/assets/svg/input'
import InputOTPSVG from '@/assets/svg/input-otp'
import PaginationSVG from '@/assets/svg/pagination'
import PopoverSVG from '@/assets/svg/popover'
import RadioGroupSVG from '@/assets/svg/radio-group'
import SelectSVG from '@/assets/svg/select'
import SonnerSVG from '@/assets/svg/sonner'
import SheetSVG from '@/assets/svg/sheet'
import SwitchSVG from '@/assets/svg/switch'
import TableSVG from '@/assets/svg/table'
import TabsSVG from '@/assets/svg/tabs'
import TextareaSVG from '@/assets/svg/textarea'
import TooltipSVG from '@/assets/svg/tooltip'

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
      note?: ReactNode
      tags?: string[]
      hasAnimation?: never | false
      animation?: never | undefined
      isComingSoon?: never | false
    }
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
      note?: ReactNode
      hasAnimation: true
      animation?: {
        badge?: string
        breakpoints?: {
          xs?: number
          sm?: number
          md?: number
          lg?: number
          xl?: number
        }
      }
      tags?: string[]
      isComingSoon?: never | false
    }
  | {
      svg?: never
      components?: never
      breakpoints?: never | undefined
      badge?: never | undefined
      note?: never | undefined
      tags?: never | undefined
      hasAnimation?: never | undefined
      animation?: never | undefined
      isComingSoon: true
    }
)

export const categories: ComponentCategory[] = [
  {
    slug: 'accordion',
    name: 'Accordion',
    svg: AccordionSVG,
    breakpoints: {
      md: 2
    },
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
    ],
    tags: ['collapsible', 'multilevel', 'multi level', 'multi-level', 'list']
  },
  {
    slug: 'alert',
    name: 'Alert',
    svg: AlertSVG,
    breakpoints: {
      md: 2
    },
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
    ],
    tags: ['alert', 'closable', 'notification', 'toast']
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    svg: AvatarSVG,
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
    ],
    tags: ['avatar group', 'avatar-group', 'avatar icon', 'verified', 'badge', 'users']
  },
  {
    slug: 'badge',
    name: 'Badge',
    svg: BadgeSVG,
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
    ],
    tags: ['closable', 'label', 'avatar', 'notification', 'chip']
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    svg: BreadcrumbSVG,
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
    ],
    tags: ['navigation', 'nav']
  },
  {
    slug: 'button',
    name: 'Button',
    svg: ButtonSVG,
    breakpoints: {
      md: 2,
      xl: 3
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        md: 2,
        xl: 3
      }
    },
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
    ],
    tags: [
      'actions',
      'gradient',
      'outline dashed',
      'loading',
      'notification',
      'click',
      'copy',
      'social',
      'icon button',
      'button icon',
      'animated button',
      'ripple effect',
      'ring hover',
      'sine hover',
      'tap animation',
      'shimmer button',
      'bounce button',
      'magnetic button',
      'heartbeat effect',
      'stitches button'
    ]
  },
  {
    slug: 'button-group',
    name: 'Button Group',
    svg: ButtonGroupSVG,
    breakpoints: {
      md: 2
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        md: 2
      }
    },
    components: [
      { name: 'button-group-01' },
      { name: 'button-group-02' },
      { name: 'button-group-03' },
      { name: 'button-group-04' },
      { name: 'button-group-05' },
      { name: 'button-group-06' },
      { name: 'button-group-07' },
      { name: 'button-group-08' },
      { name: 'button-group-09' },
      { name: 'button-group-10' },
      { name: 'button-group-11' },
      { name: 'button-group-12' },
      { name: 'button-group-13' },
      { name: 'button-group-14' },
      { name: 'button-group-15' },
      { name: 'button-group-16' }
    ],
    tags: [
      'button-group',
      'action group',
      'join',
      'zoom',
      'number',
      'dropdown button',
      'animated button group',
      'animated button-group',
      'ripple effect',
      'like dislike buttons',
      'button group scale',
      'shine hover'
    ]
  },
  {
    slug: 'calendar',
    name: 'Calendar',
    svg: CalendarSVG,
    breakpoints: {
      xl: 2
    },
    components: [
      { name: 'calendar-01' },
      { name: 'calendar-02' },
      { name: 'calendar-03' },
      { name: 'calendar-04' },
      { name: 'calendar-05' },
      { name: 'calendar-06' },
      { name: 'calendar-07' },
      { name: 'calendar-08' },
      { name: 'calendar-09' },
      { name: 'calendar-10' },
      { name: 'calendar-11' },
      { name: 'calendar-12' },
      { name: 'calendar-13' },
      { name: 'calendar-14' },
      { name: 'calendar-15' },
      { name: 'calendar-16' },
      { name: 'calendar-17' },
      { name: 'calendar-18' },
      { name: 'calendar-19' },
      { name: 'calendar-20' },
      { name: 'calendar-21' },
      { name: 'calendar-22' },
      { name: 'calendar-23' },
      { name: 'calendar-24' },
      { name: 'calendar-25' }
    ],
    tags: [
      'date picker',
      'date-picker',
      'scheduler',
      'events',
      'meeting',
      'multi month',
      'range selection',
      'minimum days',
      'disabled dates',
      'disabled days',
      'localize',
      'month and year dropdown',
      'multi day',
      'presets',
      'appointment'
    ]
  },
  {
    slug: 'card',
    name: 'Card',
    svg: CardSVG,
    breakpoints: {
      xl: 2
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        md: 2
      }
    },
    components: [
      { name: 'card-01' },
      { name: 'card-02' },
      { name: 'card-03' },
      { name: 'card-04' },
      { name: 'card-05' },
      { name: 'card-06' },
      { name: 'card-07' },
      { name: 'card-08' },
      { name: 'card-09' },
      { name: 'card-10' },
      { name: 'card-11' },
      { name: 'card-12' },
      { name: 'card-13' },
      { name: 'card-14' },
      { name: 'card-15' },
      { name: 'card-16' },
      { name: 'card-17' }
    ],
    tags: [
      'login card',
      'meeting card',
      'invite card',
      'card with media',
      'image card',
      'twitter card',
      'product card',
      'review card',
      'rating card',
      'card group',
      'animated card',
      'glowing card',
      'glow card',
      '3d card'
    ]
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    svg: CheckboxSVG,
    breakpoints: {
      md: 2,
      xl: 3
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        md: 2,
        xl: 3
      }
    },
    components: [
      { name: 'checkbox-01' },
      { name: 'checkbox-02' },
      { name: 'checkbox-03' },
      { name: 'checkbox-04' },
      { name: 'checkbox-05' },
      { name: 'checkbox-06' },
      { name: 'checkbox-07' },
      { name: 'checkbox-08' },
      { name: 'checkbox-09' },
      { name: 'checkbox-10' },
      { name: 'checkbox-11' },
      { name: 'checkbox-12' },
      { name: 'checkbox-13' },
      { name: 'checkbox-14' },
      { name: 'checkbox-15' },
      { name: 'checkbox-16' },
      { name: 'checkbox-17' },
      { name: 'checkbox-18' },
      { name: 'checkbox-19' }
    ],
    tags: [
      'label',
      'indeterminate',
      'checkbox group',
      'vertical group',
      'badge',
      'custom checkbox',
      'list',
      'checkbox tree',
      'animated checkbox',
      'particle effect',
      'todo list'
    ]
  },
  {
    slug: 'collapsible',
    name: 'Collapsible',
    svg: CollapsibleSVG,
    breakpoints: {
      xl: 2
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        xl: 2
      }
    },
    components: [
      { name: 'collapsible-01' },
      { name: 'collapsible-02' },
      { name: 'collapsible-03' },
      { name: 'collapsible-04' },
      { name: 'collapsible-05' },
      { name: 'collapsible-06' },
      { name: 'collapsible-07' },
      { name: 'collapsible-08' },
      { name: 'collapsible-09' },
      { name: 'collapsible-10' }
    ],
    tags: [
      'tree',
      'collapsible list',
      'faq',
      'multi level',
      'multi-level',
      'collapsible dropdown',
      'collapsible form',
      'collapsible card',
      'animated collapsible'
    ]
  },
  {
    slug: 'combobox',
    name: 'Combobox',
    svg: ComboboxSVG,
    breakpoints: {
      md: 2,
      xl: 3
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        md: 2,
        xl: 3
      }
    },
    components: [
      { name: 'combobox-01' },
      { name: 'combobox-02' },
      { name: 'combobox-03' },
      { name: 'combobox-04' },
      { name: 'combobox-05' },
      { name: 'combobox-06' },
      { name: 'combobox-07' },
      { name: 'combobox-08' },
      { name: 'combobox-09' },
      { name: 'combobox-10' },
      { name: 'combobox-11' },
      { name: 'combobox-12' },
      { name: 'combobox-13' },
      { name: 'combobox-14' }
    ],
    tags: [
      'autocomplete',
      'search',
      'option group',
      'multiple combobox',
      'timezone',
      'animated combobox',
      'slide in',
      'slide-in',
      'zoom in',
      'zoom-in'
    ]
  },
  {
    slug: 'data-table',
    name: 'Data Table',
    svg: DataTableSVG,
    breakpoints: {},
    components: [
      { name: 'data-table-01' },
      { name: 'data-table-02' },
      { name: 'data-table-03' },
      { name: 'data-table-04' },
      { name: 'data-table-05' },
      { name: 'data-table-06' },
      { name: 'data-table-07' },
      { name: 'data-table-08' },
      { name: 'data-table-09' },
      { name: 'data-table-10' },
      { name: 'data-table-11' },
      { name: 'data-table-12' },
      { name: 'data-table-13' }
    ],
    note: (
      <Alert className='mb-4 border-none bg-sky-600/10 text-sky-600 sm:mb-6 lg:mb-8 dark:bg-sky-400/10 dark:text-sky-400'>
        <CircleAlertIcon />
        <AlertDescription className='text-sky-600/80 dark:text-sky-400/80'>
          <span>
            Built using TanStack Table. For detailed instructions, please refer to this{' '}
            <Link
              href='https://tanstack.com/table/v8/docs/introduction'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-sky-600 dark:hover:text-sky-400'
            >
              documentation
            </Link>
            .
          </span>
        </AlertDescription>
      </Alert>
    ),
    tags: [
      'datatable',
      'data-table',
      'tanstack table',
      'row selection',
      'column visibility',
      'column filter',
      'sortable columns',
      'resizable columns',
      'pinnable columns',
      'draggable columns',
      'table pagination',
      'expandable rows',
      'export',
      'csv export',
      'excel export',
      'json export',
      'editable cells'
    ]
  },
  {
    slug: 'date-picker',
    name: 'Date and Time Picker',
    svg: DatepickerSVG,
    breakpoints: {
      md: 2,
      xl: 3
    },
    components: [
      { name: 'date-picker-01' },
      { name: 'date-picker-02' },
      { name: 'date-picker-03' },
      { name: 'date-picker-04' },
      { name: 'date-picker-05' },
      { name: 'date-picker-06' },
      { name: 'date-picker-07' },
      { name: 'date-picker-08' },
      { name: 'date-picker-09' },
      { name: 'date-picker-10' },
      { name: 'date-picker-11' },
      { name: 'date-picker-12' },
      { name: 'date-picker-13' }
    ],
    tags: ['date picker', 'date-picker', 'time picker', 'time-picker', 'chart filter']
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    svg: DialogSVG,
    breakpoints: {
      md: 3
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        sm: 3
      }
    },
    components: [
      { name: 'dialog-01' },
      { name: 'dialog-02' },
      { name: 'dialog-03' },
      { name: 'dialog-04' },
      { name: 'dialog-05' },
      { name: 'dialog-06' },
      { name: 'dialog-07' },
      { name: 'dialog-08' },
      { name: 'dialog-09' },
      { name: 'dialog-10' },
      { name: 'dialog-11' },
      { name: 'dialog-12' },
      { name: 'dialog-13' },
      { name: 'dialog-14' },
      { name: 'dialog-15' },
      { name: 'dialog-16' },
      { name: 'dialog-17' },
      { name: 'dialog-18' },
      { name: 'dialog-19' },
      { name: 'dialog-20' },
      { name: 'dialog-21' },
      { name: 'dialog-22' },
      { name: 'dialog-23' },
      { name: 'dialog-24' },
      { name: 'dialog-25' },
      { name: 'dialog-26' }
    ],
    tags: [
      'alert dialog',
      'confirmation',
      'modal',
      'popup',
      'scrollable dialog',
      'sticky header',
      'sticky footer',
      'full screen dialog',
      'refer & earn dialog',
      'rating dialog',
      'otp dialog',
      'invite dialog',
      'sign up dialog',
      'sign-up dialog',
      'sign in dialog',
      'sign-in dialog',
      'align dialog',
      'animated dialog',
      'slide to top',
      'slide-top',
      'slide-up',
      'slide to right',
      'slide-right',
      'zoom in',
      'zoom-in'
    ]
  },
  {
    slug: 'dropdown-menu',
    name: 'Dropdown Menu',
    svg: DropdownSVG,
    breakpoints: {
      sm: 2,
      md: 3
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        sm: 2,
        md: 3
      }
    },
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
    ],
    tags: [
      'dropdown',
      'menu',
      'context menu',
      'meeting schedule',
      'dropdown with avatar',
      'dropdown with checkbox',
      'dropdown with radio',
      'animated dropdown',
      'slide left',
      'slide-left',
      'slide up',
      'slide-up'
    ]
  },
  {
    slug: 'form',
    name: 'Form',
    svg: FormSVG,
    breakpoints: {
      md: 2
    },
    components: [
      { name: 'form-01' },
      { name: 'form-02' },
      { name: 'form-03' },
      { name: 'form-04' },
      { name: 'form-05' },
      { name: 'form-06' },
      { name: 'form-07' },
      { name: 'form-08' },
      { name: 'form-09' },
      { name: 'form-10' }
    ],
    note: (
      <Alert className='mb-4 border-none bg-sky-600/10 text-sky-600 sm:mb-6 lg:mb-8 dark:bg-sky-400/10 dark:text-sky-400'>
        <CircleAlertIcon />
        <AlertDescription className='text-sky-600/80 dark:text-sky-400/80'>
          <span>
            To enable the toast notifications, you need to include the{' '}
            <code className='bg-muted-foreground/10 rounded px-1 py-0.25 font-mono'>&lt;Toaster /&gt;</code> component
            in your layout. For detailed instructions, please refer to this{' '}
            <Link
              href='https://ui.shadcn.com/docs/components/sonner#installation'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-sky-600 dark:hover:text-sky-400'
            >
              documentation
            </Link>
            .
          </span>
        </AlertDescription>
      </Alert>
    ),
    tags: [
      'form validation',
      'radio form',
      'checkbox form',
      'form layout',
      'switch form',
      'otp form',
      'textarea form',
      'input form',
      'email form',
      'select form',
      'date picker form',
      'report issue form'
    ]
  },
  {
    slug: 'input',
    name: 'Input',
    svg: InputSVG,
    breakpoints: {
      md: 2,
      xl: 3
    },
    components: [
      { name: 'input-01' },
      { name: 'input-02' },
      { name: 'input-03' },
      { name: 'input-04' },
      { name: 'input-05' },
      { name: 'input-06' },
      { name: 'input-07' },
      { name: 'input-08' },
      { name: 'input-09' },
      { name: 'input-10' },
      { name: 'input-11' },
      { name: 'input-12' },
      { name: 'input-13' },
      { name: 'input-14' },
      { name: 'input-15' },
      { name: 'input-16' },
      { name: 'input-17' },
      { name: 'input-18' },
      { name: 'input-19' },
      { name: 'input-20' },
      { name: 'input-21' },
      { name: 'input-22' },
      { name: 'input-23' },
      { name: 'input-24' },
      { name: 'input-25' },
      { name: 'input-26' },
      { name: 'input-27' },
      { name: 'input-28' },
      { name: 'input-29' },
      { name: 'input-30' },
      { name: 'input-31' },
      { name: 'input-32' },
      { name: 'input-33' },
      { name: 'input-34' },
      { name: 'input-35' },
      { name: 'input-36' },
      { name: 'input-37' },
      { name: 'input-38' },
      { name: 'input-39' },
      { name: 'input-40' },
      { name: 'input-41' },
      { name: 'input-42' },
      { name: 'input-43' },
      { name: 'input-44' },
      { name: 'input-45' },
      { name: 'input-46' }
    ],
    tags: [
      'label',
      'email input',
      'password input',
      'search input',
      'helper text',
      'inset label',
      'floating label',
      'overlapping label',
      'file input',
      'clear button',
      'character limit',
      'character counter',
      'loading input',
      'password strength',
      'number input'
    ]
  },
  {
    slug: 'input-mask',
    name: 'Input Mask',
    svg: InputSVG,
    breakpoints: {
      md: 2
    },
    components: [
      { name: 'input-mask-01' },
      { name: 'input-mask-02' },
      { name: 'input-mask-03' },
      { name: 'input-mask-04' },
      { name: 'input-mask-05' },
      { name: 'input-mask-06' }
    ],
    tags: ['time input', 'debit card input', 'credit card input', 'pin input']
  },
  {
    slug: 'input-otp',
    name: 'Input OTP',
    svg: InputOTPSVG,
    breakpoints: {
      md: 2
    },
    components: [
      { name: 'input-otp-01' },
      { name: 'input-otp-02' },
      { name: 'input-otp-03' },
      { name: 'input-otp-04' },
      { name: 'input-otp-05' },
      { name: 'input-otp-06' },
      { name: 'input-otp-07' },
      { name: 'input-otp-08' },
      { name: 'input-otp-09' },
      { name: 'input-otp-10' }
    ],
    tags: ['resend timer', 'resend code', 'verification code', 'pin input']
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    svg: PaginationSVG,
    breakpoints: {
      md: 2
    },
    components: [
      { name: 'pagination-01' },
      { name: 'pagination-02' },
      { name: 'pagination-03' },
      { name: 'pagination-04' },
      { name: 'pagination-05' },
      { name: 'pagination-06' },
      { name: 'pagination-07' },
      { name: 'pagination-08' },
      { name: 'pagination-09' },
      { name: 'pagination-10' },
      { name: 'pagination-11' },
      { name: 'pagination-12' },
      { name: 'pagination-13' },
      { name: 'pagination-14' },
      { name: 'pagination-15' }
    ],
    tags: ['ellipsis', 'rows per page', 'page size']
  },
  {
    slug: 'popover',
    name: 'Popover',
    svg: PopoverSVG,
    breakpoints: {
      sm: 2,
      xl: 3
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        sm: 2,
        xl: 3
      }
    },
    components: [
      { name: 'popover-01' },
      { name: 'popover-02' },
      { name: 'popover-03' },
      { name: 'popover-04' },
      { name: 'popover-05' },
      { name: 'popover-06' },
      { name: 'popover-07' },
      { name: 'popover-08' },
      { name: 'popover-09' },
      { name: 'popover-10' },
      { name: 'popover-11' },
      { name: 'popover-12' },
      { name: 'popover-13' },
      { name: 'popover-14' },
      { name: 'popover-15' }
    ],
    tags: [
      'reviews',
      'dimensions',
      'pricing plan',
      'volume control',
      'download file',
      'confirmation',
      'filter',
      'feedback',
      'search users',
      'notifications',
      'animated popover',
      'slide in',
      'slide-in',
      'zoom in',
      'zoom-in'
    ]
  },
  {
    slug: 'radio-group',
    name: 'Radio Group',
    svg: RadioGroupSVG,
    breakpoints: {
      md: 2
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        md: 2
      }
    },
    components: [
      { name: 'radio-group-01' },
      { name: 'radio-group-02' },
      { name: 'radio-group-03' },
      { name: 'radio-group-04' },
      { name: 'radio-group-05' },
      { name: 'radio-group-06' },
      { name: 'radio-group-07' },
      { name: 'radio-group-08' },
      { name: 'radio-group-09' },
      { name: 'radio-group-10' },
      { name: 'radio-group-11' },
      { name: 'radio-group-12' },
      { name: 'radio-group-13' },
      { name: 'radio-group-14' },
      { name: 'radio-group-15' }
    ],
    tags: ['animated radio', 'radio button', 'radio list']
  },
  {
    slug: 'select',
    name: 'Select',
    svg: SelectSVG,
    breakpoints: {
      md: 2,
      xl: 3
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        md: 2,
        xl: 3
      }
    },
    components: [
      { name: 'select-01' },
      { name: 'select-02' },
      { name: 'select-03' },
      { name: 'select-04' },
      { name: 'select-05' },
      { name: 'select-06' },
      { name: 'select-07' },
      { name: 'select-08' },
      { name: 'select-09' },
      { name: 'select-10' },
      { name: 'select-11' },
      { name: 'select-12' },
      { name: 'select-13' },
      { name: 'select-14' },
      { name: 'select-15' },
      { name: 'select-16' },
      { name: 'select-17' },
      { name: 'select-18' },
      { name: 'select-19' },
      { name: 'select-20' },
      { name: 'select-21' },
      { name: 'select-22' },
      { name: 'select-23' },
      { name: 'select-24' },
      { name: 'select-25' },
      { name: 'select-26' },
      { name: 'select-27' },
      { name: 'select-28' },
      { name: 'select-29' },
      { name: 'select-30' },
      { name: 'select-31' },
      { name: 'select-32' },
      { name: 'select-33' },
      { name: 'select-34' },
      { name: 'select-35' },
      { name: 'select-36' },
      { name: 'select-37' },
      { name: 'select-38' }
    ],
    tags: [
      'native select',
      'custom select',
      'multi select',
      'animated select',
      'timezone',
      'country select',
      'overlapping label',
      'inset label',
      'option group',
      'search select',
      'animated select',
      'slide in',
      'slide-in',
      'zoom in',
      'zoom-in'
    ]
  },
  {
    slug: 'sheet',
    name: 'Sheet',
    svg: SheetSVG,
    breakpoints: {
      sm: 2,
      md: 3
    },

    components: [
      { name: 'sheet-01' },
      { name: 'sheet-02' },
      { name: 'sheet-03' },
      { name: 'sheet-04' },
      { name: 'sheet-05' },
      { name: 'sheet-06' },
      { name: 'sheet-07' }
    ],
    tags: ['scrollable sheet', 'no overlay']
  },
  {
    slug: 'sonner',
    name: 'Sonner',
    svg: SonnerSVG,
    breakpoints: {
      md: 2,
      xl: 3
    },
    components: [
      { name: 'sonner-01' },
      { name: 'sonner-02' },
      { name: 'sonner-03' },
      { name: 'sonner-04' },
      { name: 'sonner-05' },
      { name: 'sonner-06' },
      { name: 'sonner-07' },
      { name: 'sonner-08' },
      { name: 'sonner-09' },
      { name: 'sonner-10' },
      { name: 'sonner-11' },
      { name: 'sonner-12' },
      { name: 'sonner-13' },
      { name: 'sonner-14' },
      { name: 'sonner-15' },
      { name: 'sonner-16' },
      { name: 'sonner-17' },
      { name: 'sonner-18' },
      { name: 'sonner-19' },
      { name: 'sonner-20' }
    ],
    tags: ['sonner', 'toast', 'closable', 'promise']
  },
  {
    slug: 'switch',
    name: 'Switch',
    svg: SwitchSVG,
    breakpoints: {
      sm: 2,
      md: 3
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        sm: 2,
        md: 3
      }
    },
    components: [
      { name: 'switch-01' },
      { name: 'switch-02' },
      { name: 'switch-03' },
      { name: 'switch-04' },
      { name: 'switch-05' },
      { name: 'switch-06' },
      { name: 'switch-07' },
      { name: 'switch-08' },
      { name: 'switch-09' },
      { name: 'switch-10' },
      { name: 'switch-11' },
      { name: 'switch-12' },
      { name: 'switch-13' },
      { name: 'switch-14' },
      { name: 'switch-15' },
      { name: 'switch-16' },
      { name: 'switch-17' },
      { name: 'switch-18' },
      { name: 'switch-19' },
      { name: 'switch-20' }
    ],
    tags: [
      'label',
      'square switch',
      'dual label',
      'icon switch',
      'switch card',
      'list group',
      'vertical switch',
      'animated switch'
    ]
  },
  {
    slug: 'table',
    name: 'Table',
    svg: TableSVG,
    breakpoints: {},
    components: [
      { name: 'table-01' },
      { name: 'table-02' },
      { name: 'table-03' },
      { name: 'table-04' },
      { name: 'table-05' },
      { name: 'table-06' },
      { name: 'table-07' },
      { name: 'table-08' },
      { name: 'table-09' },
      { name: 'table-10' },
      { name: 'table-11' },
      { name: 'table-12' },
      { name: 'table-13' },
      { name: 'table-14' },
      { name: 'table-15' },
      { name: 'table-16' }
    ],
    tags: [
      'bordered table',
      'rounded table',
      'tabs with vertical lines',
      'without border',
      'stripped rows',
      'stripped columns',
      'highlighted row',
      'sticky header',
      'table overflow',
      'table with pagination'
    ]
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    svg: TabsSVG,
    breakpoints: {
      xl: 2
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        xl: 2
      }
    },
    components: [
      { name: 'tabs-01' },
      { name: 'tabs-02' },
      { name: 'tabs-03' },
      { name: 'tabs-04' },
      { name: 'tabs-05' },
      { name: 'tabs-06' },
      { name: 'tabs-07' },
      { name: 'tabs-08' },
      { name: 'tabs-09' },
      { name: 'tabs-10' },
      { name: 'tabs-11' },
      { name: 'tabs-12' },
      { name: 'tabs-13' },
      { name: 'tabs-14' },
      { name: 'tabs-15' },
      { name: 'tabs-16' },
      { name: 'tabs-17' },
      { name: 'tabs-18' },
      { name: 'tabs-19' },
      { name: 'tabs-20' },
      { name: 'tabs-21' },
      { name: 'tabs-22' },
      { name: 'tabs-23' },
      { name: 'tabs-24' },
      { name: 'tabs-25' },
      { name: 'tabs-26' },
      { name: 'tabs-27' },
      { name: 'tabs-28' },
      { name: 'tabs-29' }
    ],
    tags: [
      'outline tabs',
      'tabs with icon',
      'tabs with badge',
      'tabs vertical',
      'tabs horizontal',
      'tabs with tooltip',
      'tooltip',
      'soft pills tabs',
      'underline tabs',
      'lifted tabs',
      'animated tabs'
    ]
  },
  {
    slug: 'textarea',
    name: 'Textarea',
    svg: TextareaSVG,
    breakpoints: {
      md: 2,
      xl: 3
    },
    components: [
      { name: 'textarea-01' },
      { name: 'textarea-02' },
      { name: 'textarea-03' },
      { name: 'textarea-04' },
      { name: 'textarea-05' },
      { name: 'textarea-06' },
      { name: 'textarea-07' },
      { name: 'textarea-08' },
      { name: 'textarea-09' },
      { name: 'textarea-10' },
      { name: 'textarea-11' },
      { name: 'textarea-12' },
      { name: 'textarea-13' },
      { name: 'textarea-14' },
      { name: 'textarea-15' },
      { name: 'textarea-16' },
      { name: 'textarea-17' },
      { name: 'textarea-18' },
      { name: 'textarea-19' },
      { name: 'textarea-20' },
      { name: 'textarea-21' }
    ],
    tags: [
      'label',
      'character limit',
      'character counter',
      'auto resize',
      'resizable',
      'no resize',
      'read only',
      'help text'
    ]
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    svg: TooltipSVG,
    breakpoints: {
      sm: 2,
      lg: 3
    },
    hasAnimation: true,
    animation: {
      breakpoints: {
        sm: 2,
        lg: 3
      }
    },
    components: [
      { name: 'tooltip-01' },
      { name: 'tooltip-02' },
      { name: 'tooltip-03' },
      { name: 'tooltip-04' },
      { name: 'tooltip-05' },
      { name: 'tooltip-06' },
      { name: 'tooltip-07' },
      { name: 'tooltip-08' },
      { name: 'tooltip-09' },
      { name: 'tooltip-10' },
      { name: 'tooltip-11' },
      { name: 'tooltip-12' },
      { name: 'tooltip-13' },
      { name: 'tooltip-14' },
      { name: 'tooltip-15' },
      { name: 'tooltip-16' },
      { name: 'tooltip-17' }
    ],
    tags: [
      'hover card',
      'hover-card',
      'global tooltip',
      'arrow tooltip',
      'icon tooltip',
      'animated tooltip',
      'motion tooltip'
    ]
  },
  {
    slug: 'carousel',
    name: 'Carousel',
    isComingSoon: true
  },
  {
    slug: 'chart',
    name: 'Chart',
    isComingSoon: true
  },
  {
    slug: 'command',
    name: 'Command',
    isComingSoon: true
  },
  {
    slug: 'context-menu',
    name: 'Context Menu',
    isComingSoon: true
  },
  {
    slug: 'drawer',
    name: 'Drawer',
    isComingSoon: true
  },
  {
    slug: 'menubar',
    name: 'Menubar',
    isComingSoon: true
  },
  {
    slug: 'navigation-menu',
    name: 'Navigation Menu',
    isComingSoon: true
  },
  {
    slug: 'progress',
    name: 'Progress',
    isComingSoon: true
  },

  {
    slug: 'separator',
    name: 'Separator',
    isComingSoon: true
  },
  {
    slug: 'sidebar',
    name: 'Sidebar',
    isComingSoon: true
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    isComingSoon: true
  },
  {
    slug: 'slider',
    name: 'Slider',
    isComingSoon: true
  },
  {
    slug: 'toggle',
    name: 'Toggle',
    isComingSoon: true
  },
  {
    slug: 'toggle-group',
    name: 'Toggle Group',
    isComingSoon: true
  }
]

export function getCategory(slug: string): ComponentCategory | undefined {
  return categories.find(category => category.slug === slug)
}
