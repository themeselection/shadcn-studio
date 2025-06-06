import { Button } from '@/registry/new-york/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/registry/new-york/ui/dialog'

const DialogTermsAndConditionDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Terms & Condition</Button>
      </DialogTrigger>
      <DialogContent className='gap-0 p-0 sm:max-h-[min(600px,80vh)] sm:max-w-md'>
        <DialogHeader className='contents space-y-0 text-left'>
          <DialogTitle className='border-b px-6 py-4'>Terms and Condition</DialogTitle>
          <div className='text-muted-foreground px-6 py-4 text-sm'>
            <ol className='flex list-decimal flex-col gap-2 pl-4'>
              <li>
                <strong className='text-primary'>Eligibility:</strong> You must be at least 18 years old to use this
                service.
              </li>
              <li>
                <strong className='text-primary'>Account Responsibility:</strong>You are responsible for maintaining the
                confidentiality of your account and password.
              </li>
              <li>
                <strong className='text-primary'>Usage:</strong>Do not misuse or attempt to disrupt the service.
              </li>
              <li>
                <strong className='text-primary'>Data Collection:</strong>We collect and use your data as described in
                our Privacy Policy.
              </li>
              <li>
                <strong className='text-primary'>Modifications:</strong>We reserve the right to update or modify these
                terms at any time.
              </li>
              <li>
                <strong className='text-primary'>Termination:</strong>YWe may suspend or terminate your access if you
                violate these terms.
              </li>
            </ol>
            <p className='mt-3'>
              For full details, please read our complete{' '}
              <a href='#' className='text-sky-600 hover:underline dark:text-sky-400'>
                Terms & Conditions
              </a>
            </p>
          </div>
          <DialogFooter className='px-6 pb-4 sm:justify-end'>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type='button'>I Agree</Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DialogTermsAndConditionDemo
