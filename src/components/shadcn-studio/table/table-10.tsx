import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal'
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer'
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal'
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer'
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV008',
    paymentStatus: 'Paid',
    totalAmount: '$350.00',
    paymentMethod: 'Debit Card'
  },
  {
    invoice: 'INV009',
    paymentStatus: 'Pending',
    totalAmount: '$969.00',
    paymentMethod: 'Google Pay'
  },
  {
    invoice: 'INV010',
    paymentStatus: 'Unpaid',
    totalAmount: '$815.00',
    paymentMethod: 'Apple Pay'
  }
]

const StickyHeaderTableDemo = () => {
  return (
    <div className='w-full'>
      <div className='[&>div]:max-h-70 [&>div]:rounded-sm [&>div]:border'>
        <Table>
          <TableHeader>
            <TableRow className='bg-background sticky top-0'>
              <TableHead className='w-25'>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className='text-right'>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map(invoice => (
              <TableRow key={invoice.invoice}>
                <TableCell className='font-medium'>{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className='text-right'>$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <p className='text-muted-foreground mt-4 text-center text-sm'>Sticky header table</p>
    </div>
  )
}

export default StickyHeaderTableDemo
