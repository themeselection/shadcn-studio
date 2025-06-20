'use client'

import { CheckCheckIcon } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'

const SwitchFormDemo = () => {
  const FormSchema = z.object({
    stepTracker: z.boolean().refine(val => val === true, {
      message: 'You must enable step tracker to proceed.'
    })
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { stepTracker: false }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.custom(() => (
      <Alert className='border-green-600 text-green-600 dark:border-green-400 dark:text-green-400'>
        <CheckCheckIcon />
        <AlertTitle>Step tracker is {data.stepTracker ? 'enabled' : 'disabled'} &quot;Go! Run&quot;.</AlertTitle>
      </Alert>
    ))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-xs space-y-6'>
        <FormField
          control={form.control}
          name='stepTracker'
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center space-x-2'>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>Enable Daily Step Tracker</FormLabel>
              </div>
              <FormDescription>Track your daily steps to help you reach your fitness goals.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Activate</Button>
      </form>
    </Form>
  )
}

export default SwitchFormDemo
