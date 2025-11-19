import FAQ from '@/components/shadcn-studio/blocks/faq-component-01/faq-component-01'

const faqItems = [
  {
    question: 'Do you charge for each upgrade?',
    answer:
      'Some upgrades are free, while others may have an additional cost, depending on the type of upgrade and your current plan. For specific pricing details, please check our pricing page or contact our support team.'
  },
  {
    question: 'Do I need to purchase a license for each website?',
    answer:
      'Yes, you need to purchase a separate license for each website where you plan to use our components. Each license is tied to a single domain and its subdomains. This ensures proper licensing compliance and helps us maintain and improve our products for all users.'
  },
  {
    question: 'What is regular license?',
    answer:
      'A regular license grants you the right to use our components on a single website or project. It includes access to all basic features, documentation, and standard support. This license is perfect for individual developers or small businesses working on a single project.'
  },
  {
    question: 'What is extended license?',
    answer:
      'An extended license provides additional rights and features beyond the regular license. It includes usage rights for multiple websites, priority support, access to premium components, and the ability to use components in commercial projects that you sell to end customers. Perfect for agencies and large enterprises.'
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
