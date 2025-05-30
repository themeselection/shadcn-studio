import { HeadsetIcon, PackageIcon, PlusIcon, RefreshCwIcon } from 'lucide-react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { Accordion, AccordionContent, AccordionItem } from '@/registry/new-york/ui/accordion'

const items = [
  {
    icon: PackageIcon,
    title: 'How do I track my order?',
    subtitle: 'Shipping & Delivery',
    content: `You can track your order by logging into your account and visiting the "Orders" section. You'll receive tracking information via email once your order ships. For real-time updates, you can also use the tracking number provided in your shipping confirmation email.`
  },
  {
    icon: RefreshCwIcon,
    title: 'What is your return policy?',
    subtitle: 'Returns & Refunds',
    content:
      'We offer a 30-day return policy for most items. Products must be unused and in their original packaging. To initiate a return, please contact our customer service team or use the return portal in your account dashboard.'
  },
  {
    icon: HeadsetIcon,
    title: 'How can I contact customer support?',
    subtitle: 'Help & Support',
    content:
      'Our customer support team is available 24/7. You can reach us via live chat, email at support@example.com, or by phone at 1-800-123-4567. For faster service, please have your order number ready when contacting us.'
  }
]

const AccordionIconSubtitleDemo = () => {
  return (
    <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionPrimitive.Header className='flex'>
            <AccordionPrimitive.Trigger
              data-slot='accordion-trigger'
              className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'
            >
              <span className='flex items-center gap-4'>
                <span
                  className='flex size-10 shrink-0 items-center justify-center rounded-full border'
                  aria-hidden='true'
                >
                  <item.icon className='size-4' />
                </span>
                <span className='flex flex-col space-y-0.5'>
                  <span>{item.title}</span>
                  <span className='text-muted-foreground font-normal'>{item.subtitle}</span>
                </span>
              </span>
              <PlusIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200' />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionIconSubtitleDemo
