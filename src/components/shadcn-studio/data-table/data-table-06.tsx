'use client'

import { useState } from 'react'

import type { ColumnDef, ColumnFiltersState, SortingState } from '@tanstack/react-table'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const data: Payment[] = [
  {
    id: '1',
    name: 'Shang Chain',
    amount: 699,
    status: 'success',
    email: 'shang07@yahoo.com',
    dueDate: '2023-10-01'
  },
  {
    id: '2',
    name: 'Kevin Lincoln',
    amount: 242,
    status: 'success',
    email: 'kevinli09@gmail.com',
    dueDate: '2023-10-01'
  },
  {
    id: '3',
    name: 'Milton Rose',
    amount: 655,
    status: 'processing',
    email: 'rose96@gmail.com',
    dueDate: '2023-10-01'
  },
  {
    id: '4',
    name: 'Silas Ryan',
    amount: 874,
    status: 'success',
    email: 'silas22@gmail.com',
    dueDate: '2023-10-01'
  },
  {
    id: '5',
    name: 'Ben Tenison',
    amount: 541,
    status: 'failed',
    email: 'bent@hotmail.com',
    dueDate: '2023-10-01'
  }
]

export type Payment = {
  id: string
  name: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
  dueDate: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'name',
    header: () => <div className='truncate'>Name</div>,
    cell: ({ row }) => <div className='truncate font-medium'>{row.getValue('name')}</div>
  },
  {
    accessorKey: 'status',
    header: () => <div className='truncate'>Status</div>,
    cell: ({ row }) => <div className='truncate capitalize'>{row.getValue('status')}</div>
  },
  {
    accessorKey: 'email',
    header: () => <div className='truncate'>Email</div>,
    cell: ({ row }) => <div className='truncate lowercase'>{row.getValue('email')}</div>
  },
  {
    accessorKey: 'amount',
    header: () => <div className='truncate'>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)

      return <div className='font-medium'>{formatted}</div>
    }
  },
  {
    accessorKey: 'dueDate',
    header: () => <div className='truncate'>Due Date</div>,
    cell: ({ row }) => <div className='truncate lowercase'>{row.getValue('dueDate')}</div>
  }
]

const DataTableWithResizableColumnsDemo = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection
    }
  })

  return (
    <div className='max-w-3xl max-md:max-w-full'>
      <div className='rounded-md border'>
        <Table
          className='table-fixed'
          style={{
            width: table.getCenterTotalSize()
          }}
        >
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead
                      key={header.id}
                      className='group/head relative h-10 select-none last:[&>.cursor-col-resize]:opacity-0'
                      {...{
                        colSpan: header.colSpan,
                        style: {
                          width: header.getSize()
                        }
                      }}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getCanResize() && (
                        <div
                          {...{
                            onDoubleClick: () => header.column.resetSize(),
                            onMouseDown: header.getResizeHandler(),
                            onTouchStart: header.getResizeHandler(),
                            className:
                              'group-last/head:hidden absolute top-0 h-full w-4 cursor-col-resize user-select-none touch-none -right-2 z-10 flex justify-center before:absolute before:w-px before:inset-y-0 before:bg-border before:translate-x-px'
                          }}
                        />
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id} className='truncate'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <p className='text-muted-foreground mt-4 text-center text-sm'>Data table with resizable columns</p>
    </div>
  )
}

export default DataTableWithResizableColumnsDemo
