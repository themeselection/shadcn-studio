// Third-party Imports
import { toast as sonnerToast } from 'sonner'
import type { ToastT } from 'sonner'
import { X } from 'lucide-react'

export const toast = (type: ToastT['type'], message: string, options?: Partial<ToastT>) => {
  // @ts-ignore
  sonnerToast[type](message, {
    cancel: {
      label: <X className='size-4' />,
      onClick: () => {}
    },
    cancelButtonStyle: {
      backgroundColor: 'transparent',
      color: 'var(--foreground)',
      height: '20px',
      width: '20px',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      margin: '0',
      marginInlineStart: 'auto'
    },
    duration: 3000,
    ...options
  })
}
