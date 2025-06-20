'use client'

import { CheckCheckIcon } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const RadioGroupFormDemo = () => {
  const FormSchema = z.object({
    selectedOption: z.string().nonempty({
      message: 'You must select an option.'
    })
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { selectedOption: '' }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.custom(() => (
      <Alert className='border-green-600 text-green-600 dark:border-green-400 dark:text-green-400'>
        <CheckCheckIcon />
        <AlertTitle>Selected Option: {data.selectedOption}</AlertTitle>
      </Alert>
    ))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-xs space-y-6'>
        <FormField
          control={form.control}
          name='selectedOption'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>Manage data sharing preferences</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='share data' id='share-option' />
                    <FormLabel htmlFor='share-option' className='font-normal'>
                      Share Data for Personalized Experience
                    </FormLabel>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='do not share' id='no-share-option' />
                    <FormLabel htmlFor='no-share-option' className='font-normal'>
                      Do Not Share Any Data
                    </FormLabel>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='customize' id='customize-option' />
                    <FormLabel htmlFor='customize-option' className='font-normal'>
                      Customize Data Sharing Preferences
                    </FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormDescription>Please select one of the options to proceed.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Update Preferences</Button>
      </form>
    </Form>
  )
}

export default RadioGroupFormDemo
