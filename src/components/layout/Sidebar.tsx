'use client'

// React Imports
import type { ComponentProps, MouseEvent } from 'react'

// Next Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Third-party Imports
import {
  BotIcon,
  ChevronRightIcon,
  Component,
  Figma,
  Flame,
  LayoutPanelTop,
  Menu,
  PaletteIcon,
  PanelsLeftBottomIcon,
  X
} from 'lucide-react'
import { useMedia } from 'react-use'

// Component Imports
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuBadge,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
  useSidebar
} from '@/components/ui/sidebar'
import Logo from '@/components/layout/logo'

// Util Imports
import { cn } from '@/lib/utils'

// Config Imports
import { categories } from '@/config/components'

type CustomSidebarMenuItemProps = ComponentProps<'li'> & {
  href?: string
  openInNewTab?: boolean
}

type CustomSidebarMenuSubItemProps = ComponentProps<'li'> & {
  isNew?: boolean
  isUpdated?: boolean
  href?: string
  openInNewTab?: boolean
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export const CustomSidebarTrigger = () => {
  // Hooks
  const { toggleSidebar } = useSidebar()

  return (
    <Button variant='outline' size='icon' className='cursor-pointer lg:hidden' onClick={() => toggleSidebar()}>
      <Menu className='size-5' />
      <span className='sr-only'>Sidebar</span>
    </Button>
  )
}

const CustomSidebarMenuItem = ({ children, href, openInNewTab }: CustomSidebarMenuItemProps) => {
  // Hooks
  const { setOpenMobile } = useSidebar()
  const pathname = usePathname()

  // Vars
  const active = href && pathname.startsWith(href)

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        className={cn(
          'text-muted-foreground focus-visible:ring-ring/50 h-8.5 cursor-pointer rounded-sm px-3 font-medium outline-none focus-visible:ring-[3px]',
          {
            'text-primary hover:text-primary active:text-primary': active
          }
        )}
        {...(href && { asChild: true })}
      >
        {href ? (
          <Link
            href={href}
            {...(openInNewTab && { target: '_blank' })}
            rel='noopener noreferrer'
            onClick={() => setOpenMobile(false)}
          >
            {children}
          </Link>
        ) : (
          children
        )}
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

const CustomSidebarMenuSubItem = ({
  children,
  href,
  openInNewTab,
  isNew,
  isUpdated,
  onClick
}: CustomSidebarMenuSubItemProps) => {
  // Hooks
  const { setOpenMobile } = useSidebar()
  const pathname = usePathname()

  // Vars
  const active = pathname === href

  return (
    <SidebarMenuSubItem
      className={cn('hover:border-foreground border-s-1 hover:border-s-2', {
        'border-primary hover:border-primary active:border-primary border-s-2': active
      })}
    >
      <SidebarMenuSubButton
        className={cn(
          'text-muted-foreground hover:text-foreground active:text-foreground focus-visible:ring-ring/50 h-8 cursor-pointer rounded-s-none px-3 outline-none hover:bg-transparent hover:ps-[11px] focus-visible:ring-[3px] active:bg-transparent',
          { 'text-primary hover:text-primary active:text-primary ps-[11px]': active }
        )}
        {...(href && { asChild: true })}
      >
        {href ? (
          <Link
            href={href}
            {...(openInNewTab && { target: '_blank' })}
            rel='noopener noreferrer'
            onClick={e => {
              onClick?.(e)
              setOpenMobile(false)
            }}
          >
            {children}
          </Link>
        ) : (
          children
        )}
      </SidebarMenuSubButton>
      {isUpdated && (
        <SidebarMenuBadge className='!end-0 top-1/2 -translate-y-1/2 rounded-[4px] bg-indigo-500/20 px-2 py-0.5 font-normal text-indigo-500'>
          Updated
        </SidebarMenuBadge>
      )}
      {isNew && (
        <SidebarMenuBadge className='!end-0 top-1/2 -translate-y-1/2 rounded-[4px] bg-green-500/20 px-2 py-0.5 font-normal text-green-500'>
          New
        </SidebarMenuBadge>
      )}
    </SidebarMenuSubItem>
  )
}

const AppSidebar = () => {
  // Hooks
  const isBreakpointReached = useMedia('(max-width: 1023px)', false)
  const { setOpenMobile } = useSidebar()

  return (
    <Sidebar collapsible={isBreakpointReached ? 'offcanvas' : 'none'} className='bg-background border-r border-dashed'>
      {isBreakpointReached && (
        <SidebarHeader className='min-h-(--header-height) flex-row items-center justify-between px-6 py-3.5'>
          <Link href='/'>
            <Logo />
          </Link>
          <Button variant='ghost' size='icon' className='size-7 cursor-pointer' onClick={() => setOpenMobile(false)}>
            <X className='size-5' />
            <span className='sr-only'>Close</span>
          </Button>
        </SidebarHeader>
      )}
      <ScrollArea className='max-h-[calc(100vh-var(--header-height))] lg:!sticky lg:top-(--header-height)'>
        <SidebarContent>
          <SidebarGroup className={cn('px-3 pt-0 pb-4 last:pb-8 lg:px-5', { 'first:pt-8': !isBreakpointReached })}>
            <SidebarMenu className='gap-2.5'>
              <CustomSidebarMenuItem href='/components'>
                <Component className='!size-5' />
                Components
              </CustomSidebarMenuItem>
              <CustomSidebarMenuItem href='/theme-generator'>
                <PaletteIcon className='!size-5' />
                Theme Generator
                <SidebarMenuBadge className='bg-destructive/10 text-destructive static gap-0.5 rounded-full px-2 py-0.5 font-normal'>
                  <Flame className='size-4' /> Hot
                </SidebarMenuBadge>
              </CustomSidebarMenuItem>
              <CustomSidebarMenuItem href='/blocks'>
                <LayoutPanelTop className='!size-5' />
                Blocks
              </CustomSidebarMenuItem>
              <CustomSidebarMenuItem href='https://shadcnstudio.com/templates' openInNewTab>
                <PanelsLeftBottomIcon className='!size-5' />
                Templates
              </CustomSidebarMenuItem>
              <CustomSidebarMenuItem href='https://shadcnstudio.com/figma' openInNewTab>
                <Figma className='!size-5' />
                Figma UI Kit
              </CustomSidebarMenuItem>
              <CustomSidebarMenuItem href='https://shadcnstudio.com/mcp' openInNewTab>
                <BotIcon className='!size-5' />
                shadcn/studio MCP
              </CustomSidebarMenuItem>
              <CustomSidebarMenuItem href='https://shadcnstudio.com/figma-plugin' openInNewTab>
                <Figma className='!size-5' />
                Figma to Code (Figma Plugin)
              </CustomSidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup className={cn('px-3 pt-0 pb-4 last:pb-8 lg:px-4', { 'first:pt-8': !isBreakpointReached })}>
            <SidebarMenu className='gap-2.5'>
              <Collapsible className='group/collapsible' defaultOpen>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className='text-sidebar-foreground/70 focus-visible:ring-ring/50 h-8.5 cursor-pointer rounded-sm px-3 font-semibold outline-none focus-visible:ring-[3px] lg:px-4'>
                      <span>Getting Started</span>
                      <ChevronRightIcon className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className='mx-3 gap-0 border-0 p-0 lg:mx-4'>
                      <CustomSidebarMenuSubItem href='/docs/getting-started/introduction'>
                        Introduction
                      </CustomSidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup className={cn('px-3 pt-0 pb-4 last:pb-8 lg:px-4', { 'first:pt-8': !isBreakpointReached })}>
            <SidebarMenu className='gap-2.5'>
              <Collapsible className='group/collapsible' defaultOpen>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className='text-sidebar-foreground/70 focus-visible:ring-ring/50 h-8.5 cursor-pointer rounded-sm px-3 font-semibold outline-none focus-visible:ring-[3px] lg:px-4'>
                      <span>Animated Components</span>
                      <ChevronRightIcon className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className='mx-3 gap-0 border-0 p-0 lg:mx-4'>
                      {categories
                        .filter(category => category.hasAnimation)
                        .map(category => (
                          <CustomSidebarMenuSubItem
                            key={category.slug}
                            {...(category.isComingSoon
                              ? { href: '/', onClick: e => e.preventDefault() }
                              : {
                                  href: `/docs/components/${category.slug}#animated-variants`
                                })}
                          >
                            {category.name}
                            {category.isComingSoon && (
                              <SidebarMenuBadge className='bg-muted text-muted-foreground static rounded-full px-2 py-0.5 font-normal'>
                                Coming Soon
                              </SidebarMenuBadge>
                            )}
                            {category.animation?.badge && (
                              <SidebarMenuBadge
                                className={cn({
                                  'bg-primary text-primary-foreground static rounded-full px-2 py-0.5 font-normal':
                                    category.animation.badge === 'New',
                                  'static rounded-full bg-indigo-600/10 px-2 py-0.5 font-normal text-indigo-600 dark:bg-indigo-400/20 dark:text-indigo-400':
                                    category.animation.badge === 'Updated'
                                })}
                              >
                                {category.animation.badge}
                              </SidebarMenuBadge>
                            )}
                          </CustomSidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup className={cn('px-3 pt-0 pb-4 last:pb-8 lg:px-4', { 'first:pt-8': !isBreakpointReached })}>
            <SidebarMenu className='gap-2.5'>
              <Collapsible className='group/collapsible' defaultOpen>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className='text-sidebar-foreground/70 focus-visible:ring-ring/50 h-8.5 cursor-pointer rounded-sm px-3 font-semibold outline-none focus-visible:ring-[3px] lg:px-4'>
                      <span>Components</span>
                      <ChevronRightIcon className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className='mx-3 gap-0 border-0 p-0 lg:mx-4'>
                      {categories.map(category => (
                        <CustomSidebarMenuSubItem
                          key={category.slug}
                          {...(category.isComingSoon
                            ? { href: '/', onClick: e => e.preventDefault() }
                            : { href: `/docs/components/${category.slug}` })}
                        >
                          {category.name}
                          {category.isComingSoon && (
                            <SidebarMenuBadge className='bg-muted text-muted-foreground static rounded-full px-2 py-0.5 font-normal'>
                              Coming Soon
                            </SidebarMenuBadge>
                          )}
                          {category.badge && (
                            <SidebarMenuBadge
                              className={cn({
                                'bg-primary text-primary-foreground static rounded-full px-2 py-0.5 font-normal':
                                  category.badge === 'New',
                                'static rounded-full bg-indigo-600/10 px-2 py-0.5 font-normal text-indigo-600 dark:bg-indigo-400/20 dark:text-indigo-400':
                                  category.badge === 'Updated'
                              })}
                            >
                              {category.badge}
                            </SidebarMenuBadge>
                          )}
                        </CustomSidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </ScrollArea>
    </Sidebar>
  )
}

export default AppSidebar
