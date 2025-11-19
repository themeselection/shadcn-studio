'use client'

import { useEffect, useState } from 'react'

import { LoaderCircleIcon, SearchIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const users = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Howard Lloyd',
    fallback: 'HL',
    notifications: 3
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    name: 'Olivia Sparks',
    fallback: 'OS'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    name: 'Hallie Richards',
    fallback: 'HR',
    notifications: 1
  }
]

const useDebounce = (value: string, delay: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

const PopoverSearchDemo = () => {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const debouncedSearch = useDebounce(inputValue)
  const [filteredUsers, setFilteredUsers] = useState(users)

  // Handle loading state when input changes
  useEffect(() => {
    if (inputValue) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [inputValue])

  // Apply filtering after debounce and update loading state
  useEffect(() => {
    if (debouncedSearch.trim() === '') {
      setFilteredUsers(users)
      setIsLoading(false)
    } else {
      const searchTerm = debouncedSearch.toLowerCase()

      const filtered = users.filter(user => user.name.toLowerCase().includes(searchTerm))

      setFilteredUsers(filtered)
      setIsLoading(false)
    }
  }, [debouncedSearch])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <SearchIcon />
          <span className='sr-only'>Search users</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='relative'>
            <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
              <SearchIcon className='size-4' />
              <span className='sr-only'>Search</span>
            </div>
            <Input
              type='search'
              placeholder='Search users'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              className='peer px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none'
            />
            {isLoading && (
              <div className='text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 peer-disabled:opacity-50'>
                <LoaderCircleIcon className='size-4 animate-spin' />
                <span className='sr-only'>Loading...</span>
              </div>
            )}
          </div>
          <ul className='space-y-2'>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <Avatar className='size-6'>
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback className='text-xs'>{user.fallback}</AvatarFallback>
                  </Avatar>
                  <div className='flex-1 text-sm font-medium'>{user.name}</div>
                  {user.notifications && (
                    <span className='text-muted-foreground text-xs'>{`${user.notifications} Notification${user.notifications > 1 ? 's' : ''}`}</span>
                  )}
                </li>
              ))
            ) : (
              <li className='py-2 text-center text-sm'>No users found</li>
            )}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverSearchDemo
