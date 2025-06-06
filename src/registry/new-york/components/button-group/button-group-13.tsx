import { ArchiveIcon, InboxIcon, SendHorizonalIcon } from 'lucide-react'

import { RippleButton } from '@/registry/new-york/ui/ripple-button'

const ButtonGroupRippleDemo = () => {
  return (
    <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
      <RippleButton variant='outline' className='rounded-none rounded-s-md shadow-none focus-visible:z-10'>
        <InboxIcon />
        Inbox
      </RippleButton>
      <RippleButton variant='outline' className='rounded-none shadow-none focus-visible:z-10'>
        <ArchiveIcon />
        Archived
      </RippleButton>
      <RippleButton variant='outline' className='rounded-none rounded-e-md shadow-none focus-visible:z-10'>
        <SendHorizonalIcon />
        Sent
      </RippleButton>
    </div>
  )
}

export default ButtonGroupRippleDemo
