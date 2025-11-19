'use client'

import { useId, useMemo, useState } from 'react'

import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { cn } from '@/lib/utils'

const requirements = [
  { regex: /.{12,}/, text: 'At least 12 characters' },
  { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
  { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
  { regex: /[0-9]/, text: 'At least 1 number' },
  {
    regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/,
    text: 'At least 1 special character'
  }
]

const InputPasswordStrengthDemo = () => {
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const id = useId()

  const toggleVisibility = () => setIsVisible(prevState => !prevState)

  const strength = requirements.map(req => ({
    met: req.regex.test(password),
    text: req.text
  }))

  const strengthScore = useMemo(() => {
    return strength.filter(req => req.met).length
  }, [strength])

  const getColor = (score: number) => {
    if (score === 0) return 'bg-border'
    if (score <= 1) return 'bg-destructive'
    if (score <= 2) return 'bg-orange-500 '
    if (score <= 3) return 'bg-amber-500'
    if (score === 4) return 'bg-yellow-400'

    return 'bg-green-500'
  }

  const getText = (score: number) => {
    if (score === 0) return 'Enter a password'
    if (score <= 2) return 'Weak password'
    if (score <= 3) return 'Medium password'
    if (score === 4) return 'Strong password'

    return 'Very strong password'
  }

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with password strength</Label>
      <div className='relative mb-3'>
        <Input
          id={id}
          type={isVisible ? 'text' : 'password'}
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='pr-9'
        />
        <Button
          variant='ghost'
          size='icon'
          onClick={toggleVisibility}
          className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
        >
          {isVisible ? <EyeOffIcon /> : <EyeIcon />}
          <span className='sr-only'>{isVisible ? 'Hide password' : 'Show password'}</span>
        </Button>
      </div>

      <div className='mb-4 flex h-1 w-full gap-1'>
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              'h-full flex-1 rounded-full transition-all duration-500 ease-out',
              index < strengthScore ? getColor(strengthScore) : 'bg-border'
            )}
          />
        ))}
      </div>

      <p className='text-foreground text-sm font-medium'>{getText(strengthScore)}. Must contain:</p>

      <ul className='mb-4 space-y-1.5'>
        {strength.map((req, index) => (
          <li key={index} className='flex items-center gap-2'>
            {req.met ? (
              <CheckIcon className='size-4 text-green-600 dark:text-green-400' />
            ) : (
              <XIcon className='text-muted-foreground size-4' />
            )}
            <span className={cn('text-xs', req.met ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground')}>
              {req.text}
              <span className='sr-only'>{req.met ? ' - Requirement met' : ' - Requirement not met'}</span>
            </span>
          </li>
        ))}
      </ul>

      <p className='text-muted-foreground text-xs'>
        Inspired by{' '}
        <a
          className='hover:text-foreground underline'
          href='https://flyonui.com/docs/advanced-forms/strong-password/#indicator-and-hints'
          target='_blank'
          rel='noopener noreferrer'
        >
          FlyonUI
        </a>
      </p>
    </div>
  )
}

export default InputPasswordStrengthDemo
