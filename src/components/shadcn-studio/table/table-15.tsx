import { useId } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const items = [
  {
    id: '1',
    name: 'Philip George',
    email: 'philipgeorge20@gmail.com',
    location: 'Mumbai, India',
    status: 'Active',
    balance: '$10,696.00'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah.c@company.com',
    location: 'Singapore',
    status: 'Active',
    balance: '$600.00'
  },
  {
    id: '3',
    name: 'James Wilson',
    email: 'j.wilson@company.com',
    location: 'London, UK',
    status: 'Inactive',
    balance: '$650.00'
  },
  {
    id: '4',
    name: 'Maria Garcia',
    email: 'm.garcia@company.com',
    location: 'Madrid, Spain',
    status: 'Active',
    balance: '$0.00'
  },
  {
    id: '5',
    name: 'David Kim',
    email: 'd.kim@company.com',
    location: 'Seoul, KR',
    status: 'Active',
    balance: '-$1,000.00'
  }
]

const TableSelectableRowDemo = () => {
  const id = useId()

  return (
    <div className='w-full'>
      <div className='overflow-hidden rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow className='hover:bg-transparent'>
              <TableHead>
                <Checkbox id={id} aria-label='select-all' />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id} className='has-data-[state=checked]:bg-muted/50'>
                <TableCell>
                  <Checkbox id={`table-checkbox-${item.id}`} aria-label={`user-checkbox-${item.id}`} />
                </TableCell>
                <TableCell className='font-medium'>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className='text-right'>{item.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className='bg-transparent'>
            <TableRow className='hover:bg-transparent'>
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className='text-right'>$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <p className='text-muted-foreground mt-4 text-center text-sm'>Table with row selection</p>
    </div>
  )
}

export default TableSelectableRowDemo
