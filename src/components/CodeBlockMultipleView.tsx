'use client'

// React Imports
import { useEffect, useState } from 'react'

// Third-party Imports
import { FileIcon, FolderIcon, FolderOpenIcon } from 'lucide-react'
import type { BundledLanguage } from 'shiki/bundle/web'

// Type Imports
import type { FileTree, ProcessedComponentsData } from '@/types/components'

// Component Imports
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider
} from '@/components/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import CopyButton from '@/components/CopyButton'
import CodeBlock from '@/components/CodeBlock'

type Props = {
  files: ProcessedComponentsData['component']['files']
  tree: ProcessedComponentsData['tree']
}

const findFirstPath = (tree: FileTree[]): string | null => {
  if (!tree || tree.length === 0) return null

  for (const item of tree) {
    // If this item has a path, return it
    if (item.path) return item.path

    // If this item has children, search in them
    if (item.children && item.children.length > 0) {
      const path = findFirstPath(item.children)

      if (path) return path
    }
  }

  return null
}

const Tree = ({
  treeItem,
  index,
  activeFileName,
  setActiveFileName
}: {
  treeItem: FileTree
  index: number
  activeFileName: string | null
  setActiveFileName: (fileName: string) => void
}) => {
  if (!treeItem.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={treeItem.path === activeFileName}
          onClick={() => treeItem.path && setActiveFileName(treeItem.path)}
          className='hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15 gap-1.5 rounded-none pl-(--index) whitespace-nowrap focus-visible:ring-0'
          data-index={index}
          style={
            {
              '--index': `${1 + (index - 1) * 1.375}rem`
            } as React.CSSProperties
          }
        >
          <FileIcon className='size-4' />
          {treeItem.name}
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible className='group/collapsible' defaultOpen>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className='hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15 gap-1.5 rounded-none pl-(--index) whitespace-nowrap focus-visible:ring-0'
            style={
              {
                '--index': `${1 + (index - 1) * 1.375}rem`
              } as React.CSSProperties
            }
          >
            <FolderIcon className='[[data-state=open]>&]:hidden' />
            <FolderOpenIcon className='[[data-state=closed]>&]:hidden' />
            {treeItem.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className='m-0 w-full translate-x-0 border-none p-0'>
            {treeItem.children.map((treeSubItem, key) => (
              <Tree
                key={key}
                treeItem={treeSubItem}
                index={index + 1}
                activeFileName={activeFileName}
                setActiveFileName={setActiveFileName}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}

const CodeBlockMultipleView = ({ files, tree }: Props) => {
  // States
  const [activeFileName, setActiveFileName] = useState<string>('')
  const [language, setLanguage] = useState<BundledLanguage>('tsx')
  const [code, setCode] = useState<string>('')

  useEffect(() => {
    if (!activeFileName && tree) {
      const firstPath = findFirstPath(tree)

      if (firstPath) {
        setActiveFileName(firstPath)

        return
      }
    }

    setLanguage((activeFileName?.split('.').pop() as BundledLanguage) || 'tsx')
    setCode(
      files.find(file => {
        return file.target ? file.target === activeFileName : file.path === activeFileName
      })?.content || ''
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFileName, tree])

  if (!tree) {
    return null
  }

  return (
    <div className='bg-sidebar flex'>
      <div className='w-65 border-e'>
        <SidebarProvider className='flex !min-h-full flex-col'>
          <Sidebar collapsible='none' className='w-full flex-1'>
            <SidebarGroupLabel className='h-12 rounded-none border-b px-4 text-sm'>Files</SidebarGroupLabel>
            <SidebarGroup className='p-0'>
              <SidebarGroupContent>
                <SidebarMenu className='translate-x-0 gap-1.5 py-2'>
                  {tree?.map((treeItem, index) => (
                    <Tree
                      key={index}
                      treeItem={treeItem}
                      index={1}
                      activeFileName={activeFileName}
                      setActiveFileName={setActiveFileName}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </Sidebar>
        </SidebarProvider>
      </div>
      <div className='relative flex-1 overflow-auto'>
        <div className='flex h-full flex-1 flex-col p-0'>
          <div className='flex min-h-12 items-center justify-between border-b px-4 py-2'>
            <div className='flex items-center gap-2'>
              <FileIcon className='size-4 shrink-0' />
              <span className='text-sm'>{activeFileName}</span>
            </div>
            <CopyButton source={code} className='end-1 top-1' toast='Code' />
          </div>
          <CodeBlock code={code} lang={language} />
        </div>
      </div>
    </div>
  )
}

export default CodeBlockMultipleView
