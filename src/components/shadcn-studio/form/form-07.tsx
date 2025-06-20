'use client'

import { CheckCheckIcon } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectFormDemo = () => {
  const FormSchema = z.object({
    email: z
      .string({
        required_error: 'Please select an email.'
      })
      .email()
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit() {
    toast.custom(() => (
      <Alert className='border-green-600 text-green-600 sm:w-110 dark:border-green-400 dark:text-green-400'>
        <CheckCheckIcon />
        <AlertTitle>Your account has been recovered</AlertTitle>
      </Alert>
    ))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-xs space-y-6'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Enter your registered email' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='m@example.com'>user1@gmail.com</SelectItem>
                  <SelectItem value='m@google.com'>user007@gmail.com</SelectItem>
                  <SelectItem value='m@support.com'>user69@outlook.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Recover Your Account</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Recover</Button>
      </form>
    </Form>
  )
}

export default SelectFormDemo
