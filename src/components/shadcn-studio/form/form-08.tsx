'use client'

import { useState } from 'react'

import { CheckCheckIcon, CheckIcon, ChevronsUpDownIcon } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { cn } from '@/lib/utils'

const paymentMethod = [
  { value: 'credit-card', label: 'Credit Card' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'apple-pay', label: 'Apple Pay' },
  { value: 'google-pay', label: 'Google Pay' },
  { value: 'bank_transfer', label: 'Bank Transfer' },
  { value: 'bitcoin', label: 'Bitcoin' },
  { value: 'cash-on-delivery', label: 'Cash on Delivery' }
]

const FormSchema = z.object({
  method: z.string({ required_error: 'Payment method is required.' })
})

const ComboboxFormDemo = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  function onSubmit() {
    toast.custom(() => (
      <Alert className='border-green-600 text-green-600 dark:border-green-400 dark:text-green-400'>
        <CheckCheckIcon />
        <AlertTitle>You select &quot;{value}&quot; for payment</AlertTitle>
      </Alert>
    ))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-md space-y-6'>
        <FormField
          control={form.control}
          name='method'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select your payment method</FormLabel>
              <Popover open={open} onOpenChange={setOpen}>
                <FormControl>
                  <PopoverTrigger asChild>
                    <Button
                      variant='outline'
                      role='combobox'
                      aria-expanded={open}
                      className='w-full max-w-xs justify-between'
                      aria-label='Payment method combobox'
                    >
                      {field.value ? (
                        paymentMethod.find(method => method.value === field.value)?.label
                      ) : (
                        <span className='text-muted-foreground'>Select a payment method...</span>
                      )}
                      <ChevronsUpDownIcon className='opacity-50' />
                    </Button>
                  </PopoverTrigger>
                </FormControl>
                <PopoverContent className='w-(--radix-popper-anchor-width) p-0'>
                  <Command>
                    <CommandInput placeholder='Search payment method...' />
                    <CommandList>
                      <CommandEmpty>No payment method found.</CommandEmpty>
                      <CommandGroup>
                        {paymentMethod.map(method => (
                          <CommandItem
                            key={method.value}
                            value={method.value}
                            onSelect={() => {
                              setValue(method.value)
                              field.onChange(method.value)
                              setOpen(false)
                            }}
                          >
                            {method.label}
                            <CheckIcon
                              className={cn('ml-auto', value === method.value ? 'opacity-100' : 'opacity-0')}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>Select your preferred payment method.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Continue</Button>
      </form>
    </Form>
  )
}

export default ComboboxFormDemo
