import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

const SheetWithScrollableContentDemo = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Scrollable Content</Button>
      </SheetTrigger>
      <SheetContent>
        <ScrollArea className='h-full'>
          <SheetHeader>
            <SheetTitle>Terms & Condition</SheetTitle>
            <SheetDescription>Make sure read the terms and conditions before proceeding.</SheetDescription>
          </SheetHeader>
          <div className='space-y-1 p-4 pt-0 text-sm'>
            <p className='mb-2 font-medium'>Last Updated: June 1, 2025</p>

            <h3>1. Introduction</h3>
            <p>
              Welcome to our platform. These Terms and Conditions outline the rules and regulations for the use of our
              services. By accessing or using our services, you agree to comply with these terms. If you do not agree
              with any of these terms, please do not use our services.
            </p>

            <h3>2. Acceptance of Terms</h3>
            <p>
              By using our services, you confirm that you have read, understood, and accepted these terms. You also
              agree to comply with any additional guidelines, policies, or rules that may apply to specific features of
              our services.
            </p>

            <h3>3. Services Provided</h3>
            <p>
              We offer a range of digital services including but not limited to content creation, subscription services,
              and access to various online tools. You acknowledge that the nature of our services may change over time,
              and we reserve the right to modify, suspend, or discontinue services at any time.
            </p>

            <h3>4. User Obligations</h3>
            <p>
              As a user, you agree to provide accurate and complete information when required, and to update this
              information if necessary. You are responsible for maintaining the confidentiality of your account details,
              including username and password, and for all activities under your account.
            </p>

            <h3>5. Prohibited Activities</h3>
            <p>You may not use our services for any unlawful activities, including but not limited to:</p>
            <ul>
              <li>Distributing malicious content or viruses</li>
              <li>Engaging in illegal activities or fraud</li>
              <li>Impersonating another user or entity</li>
              <li>Harassing or bullying other users</li>
            </ul>

            <h3>6. Content Ownership</h3>
            <p>
              All content, including text, images, graphics, and software on our platform, is owned by us or our
              licensors and is protected by copyright laws. You are granted a limited, non-exclusive license to access
              and use this content for personal or business purposes.
            </p>

            <h3>7. Privacy and Data Protection</h3>
            <p>
              Your privacy is important to us. Please refer to our <a href='#'>Privacy Policy</a> to understand how we
              collect, use, and protect your personal data.
            </p>

            <h3>8. Payment Terms</h3>
            <p>
              Some of our services are available for a fee. You agree to pay all applicable charges and fees associated
              with your use of the services. We reserve the right to change the pricing of our services at any time.
            </p>

            <h3>9. Termination</h3>
            <p>
              We may suspend or terminate your account if you violate these Terms and Conditions or engage in any
              behavior that we deem inappropriate. Upon termination, your access to our services will be revoked, and
              any outstanding payments will be due immediately.
            </p>

            <h3>10. Disclaimers and Limitation of Liability</h3>
            <p>
              We provide our services &quot;as is&quot; and make no warranties regarding the accuracy, reliability, or
              availability of the services. We are not responsible for any damages, losses, or expenses incurred by your
              use of our services.
            </p>

            <h3>11. Governing Law</h3>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the
              jurisdiction in which our company is based. Any disputes arising from these terms shall be subject to the
              exclusive jurisdiction of the courts of that jurisdiction.
            </p>

            <h3>12. Changes to Terms</h3>
            <p>
              We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be
              posted on this page, and the revised terms will take effect immediately upon posting. It is your
              responsibility to review these terms periodically for any updates.
            </p>

            <h3>13. Contact Information</h3>
            <p>If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
            <p>Email: support@example.com</p>
            <p>Phone: +1 (800) 123-4567</p>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type='submit'>Accept</Button>
            </SheetClose>
            <SheetClose asChild>
              <Button variant='outline'>Cancel</Button>
            </SheetClose>
          </SheetFooter>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default SheetWithScrollableContentDemo
