import SocialProof from '@/components/shadcn-studio/blocks/social-proof-01/social-proof-01'

const features = [
  {
    title: 'Powerful Campaign Tracking & ROI Analysis',
    description: 'Track campaign performance and analyze return on investment'
  },
  {
    title: 'Customizable Reporting & Data Exportation',
    description: 'Create custom reports and export data easily'
  }
]

const SocialProofPage = () => {
  return <SocialProof features={features} />
}

export default SocialProofPage
