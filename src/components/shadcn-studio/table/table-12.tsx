import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

const VerticalTableDemo = () => {
  return (
    <div className='mx-auto w-full max-w-lg'>
      <div className='overflow-hidden rounded-md border'>
        <Table>
          <TableBody>
            <TableRow className='*:border-border [&>:not(:last-child)]:border-r'>
              <TableCell className='bg-muted/50 py-2 font-medium'>Product Name</TableCell>
              <TableCell className='py-2'>Iphone 16 PRO</TableCell>
            </TableRow>
            <TableRow className='*:border-border [&>:not(:last-child)]:border-r'>
              <TableCell className='bg-muted/50 py-2 font-medium'>Serial Number</TableCell>
              <TableCell className='py-2'>DF121543309KU</TableCell>
            </TableRow>
            <TableRow className='*:border-border [&>:not(:last-child)]:border-r'>
              <TableCell className='bg-muted/50 py-2 font-medium'>Category</TableCell>
              <TableCell className='py-2'>Smartphone</TableCell>
            </TableRow>
            <TableRow className='*:border-border [&>:not(:last-child)]:border-r'>
              <TableCell className='bg-muted/50 py-2 font-medium'>Purchase Date</TableCell>
              <TableCell className='py-2'>15/06/205</TableCell>
            </TableRow>
            <TableRow className='*:border-border [&>:not(:last-child)]:border-r'>
              <TableCell className='bg-muted/50 py-2 font-medium'>Warranty Expiry</TableCell>
              <TableCell className='py-2'>15/06/2026</TableCell>
            </TableRow>
            <TableRow className='*:border-border [&>:not(:last-child)]:border-r'>
              <TableCell className='bg-muted/50 py-2 font-medium'>Origin</TableCell>
              <TableCell className='py-2'>China</TableCell>
            </TableRow>
            <TableRow className='*:border-border [&>:not(:last-child)]:border-r'>
              <TableCell className='bg-muted/50 py-2 font-medium'>Assign User</TableCell>
              <TableCell className='py-2'>Alice Johnson</TableCell>
            </TableRow>
            <TableRow className='*:border-border [&>:not(:last-child)]:border-r'>
              <TableCell className='bg-muted/50 py-2 font-medium'>Value</TableCell>
              <TableCell className='py-2'>$1,120.0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p className='text-muted-foreground mt-4 text-center text-sm'>Vertical table</p>
    </div>
  )
}

export default VerticalTableDemo
