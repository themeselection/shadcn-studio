'use client'

import { CheckCheckIcon } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const ContactUSFormDemo = () => {
  const FormSchema = z.object({
    email: z.string().min(1, 'Email is required').email({ message: 'Please enter a valid email address.' }),
    issue: z.string().min(1, {
      message: 'Kindly select an issue.'
    }),
    selectedOption: z.string().nonempty({
      message: 'Selection of an option is required.'
    }),
    message: z.string().min(50, 'Describe your issue using at least 50 characters.')
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: '', issue: '', selectedOption: '', message: '' }
  })

  const onSubmit = () => {
    toast.custom(() => (
      <Alert className='border-green-600 text-green-600 sm:w-122 dark:border-green-400 dark:text-green-400'>
        <CheckCheckIcon />
        <AlertTitle>Issue submitted successfully! Our team will reach out to you shortly.</AlertTitle>
      </Alert>
    ))
  }

  return (
    <Card className='w-full max-w-sm shadow-none'>
      <CardHeader>
        <CardTitle>Report Issue</CardTitle>
        <CardDescription>Describe the issue you&apos;re facing; our team will help you.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-xs space-y-6'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Email address' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='issue'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Issue</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Issue you are facing' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='damaged'>Product is Damaged</SelectItem>
                      <SelectItem value='got-different'>Received wrong product</SelectItem>
                      <SelectItem value='not-like'>Not as expectation</SelectItem>
                      <SelectItem value='other'>Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='selectedOption'
              render={({ field }) => (
                <FormItem className='space-y-3'>
                  <FormLabel>How can we help you?</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value}>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='replace' id='want-replace' />
                        <FormLabel htmlFor='want-replace' className='font-normal'>
                          Need a product replacement
                        </FormLabel>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='refund' id='want-refund' />
                        <FormLabel htmlFor='want-refund' className='font-normal'>
                          Need a refund
                        </FormLabel>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='support' id='want-support' />
                        <FormLabel htmlFor='want-support' className='font-normal'>
                          Need guidance or support
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Please describe your issue</FormLabel>
                  <FormControl>
                    <Textarea placeholder='Provide detailed information about your issue' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ContactUSFormDemo
