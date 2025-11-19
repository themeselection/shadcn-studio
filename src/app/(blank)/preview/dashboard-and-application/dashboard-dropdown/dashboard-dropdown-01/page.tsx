import { LanguagesIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'

const DropdownPage = () => {
  return (
    <div className='flex h-70 items-start justify-center p-8'>
      <LanguageDropdown
        defaultOpen
        align='center'
        trigger={
          <Button variant='outline' size='icon'>
            <LanguagesIcon />
          </Button>
        }
      />
    </div>
  )
}

export default DropdownPage
