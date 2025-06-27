import { ChevronRightIcon, FileIcon, FolderIcon, FolderOpenIcon } from 'lucide-react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

type FileTreeItem = {
  name: string
} & (
  | {
      type: 'file'
      children?: never
    }
  | {
      type: 'folder'
      children: FileTreeItem[]
    }
)

const fileTree: FileTreeItem[] = [
  {
    name: 'components',
    type: 'folder',
    children: [
      {
        name: 'ui',
        type: 'folder',
        children: [
          { name: 'button.tsx', type: 'file' },
          { name: 'input.tsx', type: 'file' },
          { name: 'sidebar.tsx', type: 'file' }
        ]
      },
      { name: 'app-sidebar.tsx', type: 'file' }
    ]
  },
  {
    name: 'hooks',
    type: 'folder',
    children: [{ name: 'use-mobile.ts', type: 'file' }]
  },
  {
    name: 'lib',
    type: 'folder',
    children: [{ name: 'utils.ts', type: 'file' }]
  },
  {
    name: 'components.json',
    type: 'file'
  }
]

const FileTree = ({ item, level }: { level: number; item: FileTreeItem }) => {
  if (item.type === 'file') {
    return (
      <div
        className='focus-visible:ring-ring/50 flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px]'
        style={{ paddingLeft: `${level === 0 ? 1.75 : 3.25}rem` }}
      >
        <FileIcon className='size-4 shrink-0' />
        <span className='text-muted-foreground text-sm'>{item.name}</span>
      </div>
    )
  }

  return (
    <Collapsible className='flex flex-col gap-1.5' style={{ paddingLeft: `${level === 0 ? 0 : 1.5}rem` }}>
      <CollapsibleTrigger className='focus-visible:ring-ring/50 flex items-center gap-2 rounded-md p-1 outline-none focus-visible:ring-[3px]'>
        <ChevronRightIcon className='size-4 shrink-0 transition-transform [[data-state="open"]>&]:rotate-90' />
        <FolderIcon className='size-4 shrink-0 [[data-state=open]>&]:hidden' />
        <FolderOpenIcon className='size-4 shrink-0 [[data-state=closed]>&]:hidden' />
        <span className='text-sm'>{item.name}</span>
      </CollapsibleTrigger>
      <CollapsibleContent className='flex flex-col gap-1.5'>
        {item.children.map(item => (
          <FileTree key={item.name} item={item} level={level + 1} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

const CollapsibleTreeDemo = () => {
  return (
    <div className='flex w-full max-w-48 flex-col gap-2'>
      {fileTree.map(item => (
        <FileTree key={item.name} item={item} level={0} />
      ))}
    </div>
  )
}

export default CollapsibleTreeDemo
