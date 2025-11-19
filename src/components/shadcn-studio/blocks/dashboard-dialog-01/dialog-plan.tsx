'use client'

import { useState, type ReactNode } from 'react'

import { CircleCheckIcon, DollarSignIcon, MessageSquareTextIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { cn } from '@/lib/utils'

type Props = {
  trigger: ReactNode
  defaultOpen?: boolean
  className?: string
  data: {
    id: string
    title: string
    price: number
    description: string
    features: string[]
  }[]
}

const PlanDialog = ({ defaultOpen = false, trigger, data, className }: Props) => {
  const [open, setOpen] = useState(defaultOpen)
  const [plan, setPlan] = useState('1')

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className={cn('sm:max-w-155 [&>[data-slot=dialog-close]>svg]:size-5', className)}>
        <DialogHeader className='flex-row items-center gap-4'>
          <Avatar className='size-11 rounded-md'>
            <AvatarFallback className='shrink-0 rounded-md border bg-transparent'>
              <DollarSignIcon className='size-6' />
            </AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <DialogTitle className='m-0 text-lg'>Select Plan</DialogTitle>
            <DialogDescription>Simple and flexible per-user pricing</DialogDescription>
          </div>
        </DialogHeader>

        {/* Plan selection */}
        <RadioGroup className='w-full gap-6 sm:grid-cols-2' defaultValue={plan} onValueChange={setPlan}>
          {data.map(planData => (
            <div
              key={planData.id}
              className='border-input has-data-[state=checked]:border-primary relative flex w-full flex-col gap-4 rounded-md border px-5 py-6 outline-none'
            >
              <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-between gap-2'>
                  <Label htmlFor={planData.id} className='text-base'>
                    {planData.title}
                  </Label>
                  <RadioGroupItem
                    value={planData.id}
                    id={planData.id}
                    className='size-5 after:absolute after:inset-0 [&_svg]:size-3'
                    aria-label={`plan-radio-${planData.title.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </div>
                <p>
                  <span className='text-2xl font-medium'>${planData.price}</span>
                  <span className='text-muted-foreground text-xl'>/user</span>
                </p>
                <p className='text-muted-foreground text-sm'>{planData.description}</p>
              </div>

              <div className='flex flex-col gap-2.5'>
                {planData.features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-2'>
                    <CircleCheckIcon className='size-5 shrink-0' />
                    <span className='text-sm'>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </RadioGroup>

        <DialogFooter className='gap-4 max-sm:flex-col sm:justify-between'>
          <Button size='lg' className='bg-primary/10 text-primary hover:bg-primary/20'>
            <MessageSquareTextIcon />
            Chat with us
          </Button>
          <div className='flex justify-between gap-4'>
            <DialogClose asChild>
              <Button variant='outline' size='lg'>
                Cancel
              </Button>
            </DialogClose>
            <Button size='lg'>Purchase now</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PlanDialog
