import { PlusIcon } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york/ui/accordion'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/registry/new-york/ui/collapsible'

const items = [
  {
    category: 'Shipping & Delivery',
    faqs: [
      {
        title: 'How do I track my order?',
        content: `You can track your order by logging into your account and visiting the "Orders" section. You'll receive tracking information via email once your order ships. For real-time updates, you can also use the tracking number provided in your shipping confirmation email.`,
        open: true
      },
      {
        title: 'What are your shipping options?',
        content:
          'We offer standard shipping (3-5 business days), express shipping (1-2 business days), and overnight shipping. International shipping is also available to select countries. Shipping costs vary based on the destination and selected method.'
      },
      {
        title: 'Do you ship internationally?',
        content:
          'Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days, depending on the destination. Please note that customs duties and taxes may apply and are the responsibility of the recipient.'
      }
    ]
  },
  {
    category: 'Returns & Refunds',
    faqs: [
      {
        title: 'What is your return policy?',
        content:
          'We offer a 30-day return policy for most items. Products must be unused and in their original packaging. To initiate a return, please contact our customer service team or use the return portal in your account dashboard.',
        open: true
      },
      {
        title: 'How long do refunds take to process?',
        content:
          'Once we receive your returned item, refunds are typically processed within 5-7 business days. The refund will be issued to your original payment method. Please note that it may take additional time for your bank or credit card company to reflect the refund in your account.'
      },
      {
        title: 'Do you offer exchanges?',
        content:
          'Yes, we offer exchanges for different sizes, colors, or styles. You can request an exchange through our return portal or by contacting customer service. The exchange process typically takes 7-10 business days from when we receive your return.'
      }
    ]
  },
  {
    category: 'Help & Support',
    faqs: [
      {
        title: 'How can I contact customer support?',
        content:
          'Our customer support team is available 24/7. You can reach us via live chat, email at support@example.com, or by phone at 1-800-123-4567. For faster service, please have your order number ready when contacting us.',
        open: true
      },
      {
        title: 'What are your business hours?',
        content:
          'Our customer service team is available 24/7 for online support. Our physical stores are open Monday through Saturday from 9 AM to 9 PM, and Sunday from 10 AM to 6 PM. Store hours may vary during holidays.'
      },
      {
        title: 'How do I report a problem with my order?',
        content:
          'If you encounter any issues with your order, please contact our customer service team immediately. You can report problems through our website, email, or phone. Please include your order number and a detailed description of the issue for faster resolution.'
      }
    ]
  }
]

const AccordionMultilevelIconDemo = () => {
  return (
    <Accordion type='single' collapsible className='w-full rounded-md border' defaultValue='item-1'>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className='has-focus-visible:border-ring has-focus-visible:ring-ring/50 outline-none first:rounded-t-md last:rounded-b-md has-focus-visible:z-10 has-focus-visible:ring-[3px]'
        >
          <AccordionTrigger className='px-5 outline-none focus-visible:ring-0'>{item.category}</AccordionTrigger>
          <AccordionContent className='pb-0'>
            {item.faqs.map((faq, index) => (
              <Collapsible key={index} className='bg-muted border-t px-8' defaultOpen={faq.open}>
                <CollapsibleTrigger className='focus-visible:ring-ring/50 flex w-full items-center gap-4 rounded-sm py-4 font-medium outline-none focus-visible:z-10 focus-visible:ring-[3px] [&>svg>path:last-child]:origin-center [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'>
                  <PlusIcon className='text-muted-foreground pointer-events-none size-4 shrink-0' />
                  {faq.title}
                </CollapsibleTrigger>
                <CollapsibleContent className='text-muted-foreground overflow-hidden pb-4'>
                  {faq.content}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionMultilevelIconDemo
