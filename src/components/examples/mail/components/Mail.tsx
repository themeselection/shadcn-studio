'use client'

// React Imports
import { useState } from 'react'
import type { ReactNode } from 'react'

// Third-party Imports
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2
} from 'lucide-react'

// Type Imports
import type { Mail } from '../Data'

// Component Imports
import { Input } from '@/components/ui/input'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AccountSwitcher } from './AccountSwitcher'
import { MailDisplay } from './MailDisplay'
import { MailList } from './MailList'
import { Nav } from './Nav'
import { useMail, MailProvider } from '../MailContext'

// Util Imports
import { cn } from '@/lib/utils'

type MailProps = {
  accounts: {
    label: string
    email: string
    icon: ReactNode
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function Mail({
  accounts,
  mails,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  return (
    <MailProvider>
      <MailContent
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        navCollapsedSize={navCollapsedSize}
      />
    </MailProvider>
  )
}

function MailContent({
  accounts,
  mails,
  defaultLayout = [20, 32, 48],
  isCollapsed,
  setIsCollapsed,
  navCollapsedSize
}: Omit<MailProps, 'defaultLayout'> & {
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
  defaultLayout: number[]
}) {
  const { selected } = useMail()

  return (
    <ResizablePanelGroup
      direction='horizontal'
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`
      }}
      className='h-full max-h-[800px] items-stretch'
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={navCollapsedSize}
        collapsible={true}
        minSize={15}
        maxSize={20}
        onCollapse={() => {
          setIsCollapsed(true)
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
        }}
        onResize={() => {
          setIsCollapsed(false)
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
        }}
        className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
      >
        <div className={cn('flex h-[52px] items-center justify-center', isCollapsed ? 'h-[52px]' : 'px-2')}>
          <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
        </div>
        <Separator />
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: 'Inbox',
              label: '128',
              icon: Inbox,
              variant: 'default'
            },
            {
              title: 'Drafts',
              label: '9',
              icon: File,
              variant: 'ghost'
            },
            {
              title: 'Sent',
              label: '',
              icon: Send,
              variant: 'ghost'
            },
            {
              title: 'Junk',
              label: '23',
              icon: ArchiveX,
              variant: 'ghost'
            },
            {
              title: 'Trash',
              label: '',
              icon: Trash2,
              variant: 'ghost'
            },
            {
              title: 'Archive',
              label: '',
              icon: Archive,
              variant: 'ghost'
            }
          ]}
        />
        <Separator />
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: 'Social',
              label: '972',
              icon: Users2,
              variant: 'ghost'
            },
            {
              title: 'Updates',
              label: '342',
              icon: AlertCircle,
              variant: 'ghost'
            },
            {
              title: 'Forums',
              label: '128',
              icon: MessagesSquare,
              variant: 'ghost'
            },
            {
              title: 'Shopping',
              label: '8',
              icon: ShoppingCart,
              variant: 'ghost'
            },
            {
              title: 'Promotions',
              label: '21',
              icon: Archive,
              variant: 'ghost'
            }
          ]}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <Tabs defaultValue='all' className='gap-0'>
          <div className='flex items-center px-4 py-2'>
            <h1 className='text-xl font-bold'>Inbox</h1>
            <TabsList className='ml-auto'>
              <TabsTrigger value='all' className='text-zinc-600 dark:text-zinc-200'>
                All mail
              </TabsTrigger>
              <TabsTrigger value='unread' className='text-zinc-600 dark:text-zinc-200'>
                Unread
              </TabsTrigger>
            </TabsList>
          </div>
          <Separator />
          <div className='bg-background/95 supports-[backdrop-filter]:bg-background/60 p-4 backdrop-blur'>
            <form>
              <div className='relative'>
                <Search className='text-muted-foreground absolute top-2.5 left-2 h-4 w-4' />
                <Input placeholder='Search' className='pl-8' />
              </div>
            </form>
          </div>
          <TabsContent value='all' className='m-0'>
            <MailList items={mails} />
          </TabsContent>
          <TabsContent value='unread' className='m-0'>
            <MailList items={mails.filter(item => !item.read)} />
          </TabsContent>
        </Tabs>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
        <MailDisplay mail={mails.find(item => item.id === selected) || null} />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
