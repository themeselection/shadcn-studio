import { Clock8Icon, MapPinIcon, BriefcaseBusinessIcon, PhoneIcon } from 'lucide-react'

import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-01/contact-us-page-01'

const contactInfo = [
  {
    title: 'Office Hours',
    icon: Clock8Icon,
    description: 'Monday-Friday\n8:00 am to 5:00 pm'
  },
  {
    title: 'Our Address',
    icon: MapPinIcon,
    description: '802 Perston Rd,Maine\n96812, USA'
  },
  {
    title: 'Office 2',
    icon: BriefcaseBusinessIcon,
    description: '802 Perston Rd,Maine\n96812, USA'
  },
  {
    title: 'Get in Touch',
    icon: PhoneIcon,
    description: '+1-316-888-9685\n+1-316-477-0169'
  }
]

const ContactUsPage = () => {
  return <ContactUs contactInfo={contactInfo} />
}

export default ContactUsPage
