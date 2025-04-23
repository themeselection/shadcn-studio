import { DotIcon } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/registry/new-york/ui/breadcrumb'

const BreadcrumbDotSeparatorDemo = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <DotIcon className='size-4' />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Documents</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <DotIcon className='size-4' />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Add Document</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbDotSeparatorDemo
