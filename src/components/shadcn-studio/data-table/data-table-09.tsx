'use client'

import { Fragment } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

import type { ColumnDef } from '@tanstack/react-table'
import { flexRender, getCoreRowModel, getExpandedRowModel, useReactTable } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type Member = {
  name: string
  role: string
  email: string
  hireDate: string
  dob: string
}

type Team = {
  teamName: string
  department: string
  location: string
  nextMilestone: string
  budget: number
  members: Member[]
}

const data: Team[] = [
  {
    teamName: 'Digital Marketing',
    department: 'Marketing',
    location: 'London',
    nextMilestone: 'Launch New Campaign',
    budget: 30000,
    members: [
      {
        name: 'Alice Johnson',
        role: 'Lead Strategist',
        email: 'alice.johnson@example.com',
        hireDate: '2020-01-15',
        dob: '1990-01-01'
      },
      {
        name: 'Bob Smith',
        role: 'Content Creator',
        email: 'bob.smith@example.com',
        hireDate: '2021-03-22',
        dob: '1992-05-15'
      },
      {
        name: 'Charlie Brown',
        role: 'SEO Specialist',
        email: 'charlie.brown@example.com',
        hireDate: '2022-07-30',
        dob: '1995-11-20'
      }
    ]
  },
  {
    teamName: 'Product Development',
    department: 'Engineering',
    location: 'San Francisco',
    nextMilestone: 'Release Version 2.0',
    budget: 50000,
    members: [
      {
        name: 'David Wilson',
        role: 'Product Manager',
        email: 'david.wilson@example.com',
        hireDate: '2019-05-10',
        dob: '1988-02-25'
      },
      {
        name: 'Emma Johnson',
        role: 'UX Designer',
        email: 'emma.johnson@example.com',
        hireDate: '2020-08-15',
        dob: '1990-11-30'
      },
      {
        name: 'Frank Miller',
        role: 'QA Engineer',
        email: 'frank.miller@example.com',
        hireDate: '2021-01-20',
        dob: '1993-06-10'
      }
    ]
  },
  {
    teamName: 'Sales Team',
    department: 'Sales',
    location: 'New York',
    nextMilestone: 'Close Q3 Deals',
    budget: 40000,
    members: [
      {
        name: 'Grace Lee',
        role: 'Sales Executive',
        email: 'grace.lee@example.com',
        hireDate: '2021-05-12',
        dob: '1995-03-22'
      },
      {
        name: 'Henry Davis',
        role: 'Account Manager',
        email: 'henry.davis@example.com',
        hireDate: '2020-11-01',
        dob: '1992-07-15'
      },
      {
        name: 'Ivy Garcia',
        role: 'Sales Analyst',
        email: 'ivy.garcia@example.com',
        hireDate: '2021-09-15',
        dob: '1994-02-10'
      }
    ]
  }
]

const columns: ColumnDef<Team>[] = [
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <Button
          {...{
            className: 'size-7 shadow-none text-muted-foreground',
            onClick: row.getToggleExpandedHandler(),
            'aria-expanded': row.getIsExpanded(),
            'aria-label': row.getIsExpanded()
              ? `Collapse details for ${row.original.teamName}`
              : `Expand details for ${row.original.teamName}`,
            size: 'icon',
            variant: 'ghost'
          }}
        >
          {row.getIsExpanded() ? (
            <ChevronUpIcon className='opacity-60' size={16} aria-hidden='true' />
          ) : (
            <ChevronDownIcon className='opacity-60' size={16} aria-hidden='true' />
          )}
        </Button>
      ) : undefined
    }
  },
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    )
  },
  {
    header: 'Team Name',
    accessorKey: 'teamName',
    cell: ({ row }) => <div className='font-medium'>{row.getValue('teamName')}</div>
  },
  {
    header: 'Department',
    accessorKey: 'department',
    cell: ({ row }) => row.getValue('department')
  },
  {
    header: 'Location',
    accessorKey: 'location',
    cell: ({ row }) => row.getValue('location')
  },
  {
    header: 'Next Milestone',
    accessorKey: 'nextMilestone',
    cell: ({ row }) => row.getValue('nextMilestone')
  },
  {
    header: () => <div>Budget</div>,
    accessorKey: 'budget',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('budget'))

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)

      return <div>{formatted}</div>
    }
  }
]

const DataTableWithExpandableRowsDemo = () => {
  const table = useReactTable({
    data,
    columns,
    getRowCanExpand: row => Boolean(row.original.members),
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel()
  })

  return (
    <div className='w-full'>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id} className='hover:bg-transparent'>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <Fragment key={row.id}>
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map(cell => (
                      <TableCell
                        key={cell.id}
                        className='[&:has([aria-expanded])]: [&:has([aria-expanded])]:w-px [&:has([aria-expanded])]:py-0'
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.getIsExpanded() && (
                    <TableRow className='hover:bg-transparent'>
                      <TableCell colSpan={row.getVisibleCells().length} className='p-0'>
                        <Table>
                          <TableHeader className='border-b'>
                            <TableRow className='hover:bg-muted/30!'>
                              <TableHead className='w-23.5'></TableHead>
                              <TableHead>Member Name</TableHead>
                              <TableHead>Role</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Hire Date</TableHead>
                              <TableHead>Date of Birth</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {row.original.members.map(member => (
                              <TableRow key={member.email}>
                                <TableCell></TableCell>
                                <TableCell>{member.name}</TableCell>
                                <TableCell>{member.role}</TableCell>
                                <TableCell>{member.email}</TableCell>
                                <TableCell>{member.hireDate}</TableCell>
                                <TableCell>{member.dob}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
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
      <p className='text-muted-foreground mt-4 text-center text-sm'>Data table with expanding sub-rows made</p>
    </div>
  )
}

export default DataTableWithExpandableRowsDemo
