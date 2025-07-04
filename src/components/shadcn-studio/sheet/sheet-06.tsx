import type { ForwardRefExoticComponent, RefAttributes } from 'react'

import {
  BookTextIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
  CircleSmallIcon,
  HeartPlusIcon,
  HomeIcon,
  LayoutPanelTopIcon,
  LogInIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareTextIcon,
  PanelTopIcon,
  ShoppingCartIcon,
  type LucideProps
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

type NavigationItem = {
  name: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
} & (
  | {
      type: 'page'
      children?: never
    }
  | {
      type: 'category'
      children: NavigationItem[]
    }
)

const navigationMenu: NavigationItem[] = [
  {
    name: 'Dashboard',
    icon: HomeIcon,
    type: 'page'
  },
  {
    name: 'Layouts',
    icon: LayoutPanelTopIcon,
    type: 'category',
    children: [
      {
        name: 'Content Navbar',
        icon: LayoutPanelTopIcon,
        type: 'page'
      },
      {
        name: 'Horizontal',
        icon: LayoutPanelTopIcon,
        type: 'page'
      },
      {
        name: 'Without Menu',
        icon: LayoutPanelTopIcon,
        type: 'page'
      }
    ]
  },
  {
    name: 'Front Pages',
    icon: PanelTopIcon,
    type: 'category',
    children: [
      {
        name: 'Landing Page',
        icon: PanelTopIcon,
        type: 'page'
      },
      {
        name: 'Pricing Page',
        icon: PanelTopIcon,
        type: 'page'
      },
      {
        name: 'Checkout Page',
        icon: PanelTopIcon,
        type: 'page'
      }
    ]
  },
  {
    name: 'Chat',
    icon: MessageSquareTextIcon,
    type: 'page'
  },
  {
    name: 'Email',
    icon: MailIcon,
    type: 'page'
  },
  {
    name: 'Calendar',
    icon: CalendarDaysIcon,
    type: 'page'
  },
  {
    name: 'Ecommerce',
    icon: ShoppingCartIcon,
    type: 'category',
    children: [
      {
        name: 'Products',
        icon: ShoppingCartIcon,
        type: 'page'
      },
      {
        name: 'Categories',
        icon: ShoppingCartIcon,
        type: 'page'
      },
      {
        name: 'Shopping & Delivery',
        icon: ShoppingCartIcon,
        type: 'page'
      },
      {
        name: 'Location',
        icon: ShoppingCartIcon,
        type: 'page'
      }
    ]
  },
  {
    name: 'Sign In',
    icon: LogInIcon,
    type: 'page'
  },
  {
    name: 'Sign Out',
    icon: LogOutIcon,
    type: 'page'
  },
  {
    name: 'Support',
    icon: HeartPlusIcon,
    type: 'page'
  },
  {
    name: 'Documentation',
    icon: BookTextIcon,
    type: 'page'
  }
]

const NavigationMenu = ({ item, level }: { level: number; item: NavigationItem }) => {
  if (item.type === 'page') {
    return (
      <div
        className='focus-visible:ring-ring/50 flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px]'
        style={{ paddingLeft: `${level === 0 ? 0.25 : 1.75}rem` }}
      >
        {level === 0 ? <item.icon className='size-4 shrink-0' /> : <CircleSmallIcon className='size-4 shrink-0' />}
        <span className='text-sm'>{item.name}</span>
      </div>
    )
  }

  return (
    <Collapsible className='flex flex-col gap-1.5' style={{ paddingLeft: `${level === 0 ? 0 : 1.5}rem` }}>
      <CollapsibleTrigger className='focus-visible:ring-ring/50 flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px]'>
        {level === 0 ? <item.icon className='size-4 shrink-0' /> : <CircleSmallIcon className='size-4 shrink-0' />}
        <span className='flex-1 text-start text-sm'>{item.name}</span>
        <ChevronRightIcon className='size-4 shrink-0 transition-transform [[data-state="open"]>&]:rotate-90' />
      </CollapsibleTrigger>
      <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down flex flex-col gap-1.5 overflow-hidden transition-all duration-300'>
        {item.children.map(item => (
          <NavigationMenu key={item.name} item={item} level={level + 1} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

const SheetWithNavigationMenuDemo = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Navigation Menu</Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-75'>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className='flex flex-col gap-2.5 p-4 pt-0'>
          {navigationMenu.map(item => (
            <NavigationMenu key={item.name} item={item} level={0} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SheetWithNavigationMenuDemo
