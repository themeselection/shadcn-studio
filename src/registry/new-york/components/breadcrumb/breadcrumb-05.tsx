import { Badge } from '@/registry/new-york/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/registry/new-york/ui/breadcrumb'

const BreadcrumbTabsOutlineDemo = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>
            <Badge variant='outline' className='text-muted-foreground hover:text-foreground rounded-full'>
              Home
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>
            <Badge variant='outline' className='text-muted-foreground hover:text-foreground rounded-full'>
              Documents
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <Badge variant='outline' className='border-primary text-primary rounded-full'>
              Add Document
            </Badge>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbTabsOutlineDemo
