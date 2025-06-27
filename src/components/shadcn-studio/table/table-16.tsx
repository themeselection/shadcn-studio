import { useId } from 'react'

import { ArchiveIcon, PencilIcon, Trash2Icon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const items = [
  {
    id: '1',
    productName: 'Chair',
    model: 'Wooden Garden  Chair',
    src: 'https://cdn.shadcnstudio.com/ss-assets/products/product-1.png',
    fallback: 'WGC',
    color: 'Black',
    category: 'Furniture',
    price: '$269.09'
  },
  {
    id: '2',
    productName: 'Nike Shoes',
    model: 'Jordan 1 Retro OG',
    src: 'https://cdn.shadcnstudio.com/ss-assets/products/product-2.png',
    fallback: 'J1R',
    color: 'Red',
    category: 'Sneakers',
    price: '$150.00'
  },
  {
    id: '3',
    productName: 'OnePluse',
    model: 'OnePlus 7 Pro',
    src: 'https://cdn.shadcnstudio.com/ss-assets/products/product-3.png',
    fallback: 'O7P',
    color: 'Nebula Blue',
    category: 'Smartphone',
    price: '$869.00'
  },
  {
    id: '4',
    productName: 'Nintendo',
    model: 'Nintendo Switch',
    src: 'https://cdn.shadcnstudio.com/ss-assets/products/product-4.png',
    fallback: 'NS',
    color: 'Neon Blue and Red',
    category: 'Console Gaming',
    price: '$499.00'
  },
  {
    id: '5',
    productName: 'Apple Magic Mouse',
    model: 'Apple Magic Mouse',
    src: 'https://cdn.shadcnstudio.com/ss-assets/products/product-5.png',
    fallback: 'AMM',
    color: 'Black',
    category: 'Electronics',
    price: '$110.29'
  }
]

const ProductTableDemo = () => {
  const id = useId()

  return (
    <div className='w-full'>
      <div className='[&>div]:rounded-sm [&>div]:border'>
        <Table>
          <TableHeader>
            <TableRow className='hover:bg-transparent'>
              <TableHead>
                <Checkbox id={id} aria-label='select-all' />
              </TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Color</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className='w-0'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id} className='has-data-[state=checked]:bg-muted/50'>
                <TableCell>
                  <Checkbox id={`table-checkbox-${item.id}`} aria-label={`product-checkbox-${item.id}`} />
                </TableCell>
                <TableCell>
                  <div className='flex items-center gap-3'>
                    <Avatar className='rounded-sm'>
                      <AvatarImage src={item.src} alt={item.model} />
                      <AvatarFallback className='text-xs'>{item.fallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className='font-medium'>{item.productName}</div>
                      <span className='text-muted-foreground mt-0.5 text-xs'>{item.model}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{item.color}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell className='flex items-center gap-1'>
                  <Button variant='ghost' size='icon' className='rounded-full' aria-label={`product-${item.id}-edit`}>
                    <PencilIcon />
                  </Button>
                  <Button variant='ghost' size='icon' className='rounded-full' aria-label={`product-${item.id}-remove`}>
                    <Trash2Icon />
                  </Button>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='rounded-full'
                    aria-label={`product-${item.id}-archive`}
                  >
                    <ArchiveIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className='text-muted-foreground mt-4 text-center text-sm'>Product Table</p>
    </div>
  )
}

export default ProductTableDemo
