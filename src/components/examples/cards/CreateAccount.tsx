// Third-party Imports
import { Github } from 'lucide-react'

// Component Imports
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

// SVG Imports
import Google from '@/assets/svg/Google'

export function CardsCreateAccount() {
  return (
    <Card>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Create an account</CardTitle>
        <CardDescription>Enter your email below to create your account</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid grid-cols-2 gap-6'>
          <Button variant='outline'>
            <Github className='size-5' />
            GitHub
          </Button>
          <Button variant='outline'>
            <Google className='size-4' />
            Google
          </Button>
        </div>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-card text-muted-foreground px-2'>Or continue with</span>
          </div>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' placeholder='m@example.com' />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' type='password' />
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Create account</Button>
      </CardFooter>
    </Card>
  )
}
