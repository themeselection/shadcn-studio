'use client'

import type { CSSProperties } from 'react'
import { useState, useId } from 'react'

import { ChevronDownIcon, ChevronUpIcon, GripVerticalIcon } from 'lucide-react'

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent
} from '@dnd-kit/core'
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers'
import { arrayMove, horizontalListSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { Cell, ColumnDef, Header, SortingState } from '@tanstack/react-table'
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type Employee = {
  employeeId: number
  firstName: string
  lastName: string
  jobTitle: string
  department: string
  dob: string
  hireDate: string
  salary: number
}

const data: Employee[] = [
  {
    employeeId: 1,
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Software Engineer',
    department: 'Engineering',
    dob: '1990-01-01',
    hireDate: '2020-01-15',
    salary: 80000
  },
  {
    employeeId: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    jobTitle: 'Product Manager',
    department: 'Product',
    dob: '1985-05-20',
    hireDate: '2019-03-10',
    salary: 95000
  },
  {
    employeeId: 3,
    firstName: 'Alice',
    lastName: 'Johnson',
    jobTitle: 'UX Designer',
    department: 'Design',
    dob: '1992-07-30',
    hireDate: '2021-06-01',
    salary: 70000
  },
  {
    employeeId: 4,
    firstName: 'Bob',
    lastName: 'Brown',
    jobTitle: 'Data Analyst',
    department: 'Analytics',
    dob: '1988-11-15',
    hireDate: '2018-09-20',
    salary: 75000
  }
]

const columns: ColumnDef<Employee>[] = [
  {
    id: 'firstName',
    header: 'First Name',
    accessorKey: 'firstName',
    cell: ({ row }) => <div className='font-medium'>{row.getValue('firstName')}</div>,
    sortUndefined: 'last',
    sortDescFirst: false
  },
  {
    id: 'lastName',
    header: 'Last Name',
    accessorKey: 'lastName',
    cell: ({ row }) => <div>{row.getValue('lastName')}</div>
  },
  {
    id: 'jobTitle',
    header: 'Job Title',
    accessorKey: 'jobTitle',
    cell: ({ row }) => <div>{row.getValue('jobTitle')}</div>
  },
  {
    id: 'department',
    header: 'Department',
    accessorKey: 'department',
    cell: ({ row }) => <div>{row.getValue('department')}</div>
  },
  {
    id: 'dob',
    header: 'Date of Birth',
    accessorKey: 'dob',
    cell: ({ row }) => <div>{row.getValue('dob')}</div>
  },
  {
    id: 'hireDate',
    header: 'Hire Date',
    accessorKey: 'hireDate',
    cell: ({ row }) => <div>{row.getValue('hireDate')}</div>
  },
  {
    id: 'salary',
    header: 'Salary',
    accessorKey: 'salary',
    cell: ({ row }) => {
      const salary = parseFloat(row.getValue('salary'))

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(salary)

      return <div>{formatted}</div>
    }
  }
]

const DraggableColumnDataTableDemo = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnOrder, setColumnOrder] = useState<string[]>(columns.map(column => column.id as string))

  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
      columnOrder
    },
    onColumnOrderChange: setColumnOrder,
    enableSortingRemoval: false
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active && over && active.id !== over.id) {
      setColumnOrder(columnOrder => {
        const oldIndex = columnOrder.indexOf(active.id as string)
        const newIndex = columnOrder.indexOf(over.id as string)

        return arrayMove(columnOrder, oldIndex, newIndex)
      })
    }
  }

  const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}))

  return (
    <div className='w-full'>
      <div className='rounded-md border'>
        <DndContext
          id={useId()}
          collisionDetection={closestCenter}
          modifiers={[restrictToHorizontalAxis]}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id} className='bg-muted/50 [&>th]:border-t-0'>
                  <SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
                    {headerGroup.headers.map(header => (
                      <DraggableTableHeader key={header.id} header={header} />
                    ))}
                  </SortableContext>
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map(row => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map(cell => (
                      <SortableContext key={cell.id} items={columnOrder} strategy={horizontalListSortingStrategy}>
                        <DragAlongCell key={cell.id} cell={cell} />
                      </SortableContext>
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
        </DndContext>
      </div>
      <p className='text-muted-foreground mt-4 text-center text-sm'>Data table with draggable columns</p>
    </div>
  )
}

const DraggableTableHeader = ({ header }: { header: Header<Employee, unknown> }) => {
  const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({
    id: header.column.id
  })

  const style: CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    transition,
    whiteSpace: 'nowrap',
    width: header.column.getSize(),
    zIndex: isDragging ? 1 : 0
  }

  return (
    <TableHead
      ref={setNodeRef}
      className='before:bg-border relative h-10 border-t before:absolute before:inset-y-0 before:start-0 before:w-px first:before:bg-transparent'
      style={style}
      aria-sort={
        header.column.getIsSorted() === 'asc'
          ? 'ascending'
          : header.column.getIsSorted() === 'desc'
            ? 'descending'
            : 'none'
      }
    >
      <div className='flex items-center justify-start gap-0.5'>
        <Button
          size='icon'
          variant='ghost'
          className='-ml-2 size-7 shadow-none'
          {...attributes}
          {...listeners}
          aria-label='Drag to reorder'
        >
          <GripVerticalIcon className='opacity-60' size={16} aria-hidden='true' />
        </Button>
        <span className='grow truncate'>
          {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
        </span>
        <Button
          size='icon'
          variant='ghost'
          className='group -mr-1 size-7 shadow-none'
          onClick={header.column.getToggleSortingHandler()}
          onKeyDown={e => {
            if (header.column.getCanSort() && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault()
              header.column.getToggleSortingHandler()?.(e)
            }
          }}
          aria-label='Toggle sorting'
        >
          {{
            asc: <ChevronUpIcon className='shrink-0 opacity-60' size={16} aria-hidden='true' />,
            desc: <ChevronDownIcon className='shrink-0 opacity-60' size={16} aria-hidden='true' />
          }[header.column.getIsSorted() as string] ?? (
            <ChevronUpIcon className='shrink-0 opacity-0 group-hover:opacity-60' size={16} aria-hidden='true' />
          )}
        </Button>
      </div>
    </TableHead>
  )
}

const DragAlongCell = ({ cell }: { cell: Cell<Employee, unknown> }) => {
  const { isDragging, setNodeRef, transform, transition } = useSortable({
    id: cell.column.id
  })

  const style: CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    transition,
    width: cell.column.getSize(),
    zIndex: isDragging ? 1 : 0
  }

  return (
    <TableCell ref={setNodeRef} className='truncate' style={style}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>
  )
}

export default DraggableColumnDataTableDemo
