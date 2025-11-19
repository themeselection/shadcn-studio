import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01'

const testimonials: TestimonialItem[] = [
  {
    name: 'Craig Bator',
    role: 'CEO & Co Founder',
    company: 'Zendesk',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto',
    rating: 5,
    content: "I've been using shadcn/studio for a year now and it's made managing my finances so much easier and quick."
  },
  {
    name: 'Martin Dorwart',
    role: 'Product manager',
    company: 'Orbit',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
    rating: 4,
    content: "With shadcn/studio, I can easily track my investments and see how they're performing in real-time."
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Designer',
    company: 'Figma',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto',
    rating: 5,
    content:
      "The UI components are beautifully designed and incredibly easy to customize. It's transformed our design workflow."
  },
  {
    name: 'Alex Chen',
    role: 'Frontend Developer',
    company: 'Vercel',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto',
    rating: 4,
    content:
      'shadcn/studio has saved us countless hours in development. The component library is comprehensive and well-documented.'
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
