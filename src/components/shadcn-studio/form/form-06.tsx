'use client'

import { CheckCheckIcon } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

const TextareaFormDemo = () => {
  // Validation schema
  const FormSchema = z.object({
    message: z
      .string()
      .min(50, 'Message must be at least 50 characters long.')
      .max(500, 'Message cannot exceed 500 characters.')
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { message: '' }
  })

  function onSubmit() {
    toast.custom(() => (
      <Alert className='border-green-600 text-green-600 sm:w-110 dark:border-green-400 dark:text-green-400'>
        <CheckCheckIcon />
        <AlertTitle>Your application is submitted. We will contact you soon.</AlertTitle>
      </Alert>
    ))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-xs space-y-6'>
        {/* Textarea Field */}
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell Us About Yourself</FormLabel>
              <FormControl>
                <Textarea placeholder="Why do you think you're the perfect fit for this position?" {...field} />
              </FormControl>
              <FormDescription>
                Please include your qualifications, skills, and experiences that make you stand out.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}

export default TextareaFormDemo
