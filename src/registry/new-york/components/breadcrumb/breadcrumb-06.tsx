import { ChevronDown, HomeIcon } from 'lucide-react'

import { Badge } from '@/registry/new-york/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/registry/new-york/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/registry/new-york/ui/dropdown-menu'

const BreadcrumbWithDropdownDemo = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>
            <Badge variant='outline' className='text-muted-foreground hover:text-foreground rounded-full'>
              <HomeIcon className='size-3' />
              Home
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator> / </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>
            <Badge variant='outline' className='text-muted-foreground hover:text-foreground rounded-full'>
              Documents
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator> / </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center gap-1'>
                Add Document
                <ChevronDown className='size-4' />
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start'>
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbWithDropdownDemo
