// Component Imports
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' alt='Avatar' />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm leading-none font-medium'>Olivia Martin</p>
          <p className='text-muted-foreground text-sm'>olivia.martin@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$1,999.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png' alt='Avatar' />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm leading-none font-medium'>Jackson Lee</p>
          <p className='text-muted-foreground text-sm'>jackson.lee@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$39.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png' alt='Avatar' />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm leading-none font-medium'>Isabella Nguyen</p>
          <p className='text-muted-foreground text-sm'>isabella.nguyen@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$299.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png' alt='Avatar' />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm leading-none font-medium'>William Kim</p>
          <p className='text-muted-foreground text-sm'>will@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$99.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Avatar' />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm leading-none font-medium'>Sofia Davis</p>
          <p className='text-muted-foreground text-sm'>sofia.davis@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$39.00</div>
      </div>
    </div>
  )
}
