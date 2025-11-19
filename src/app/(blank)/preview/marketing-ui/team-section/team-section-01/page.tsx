import Team from '@/components/shadcn-studio/blocks/team-section-01/team-section-01'

const teamMembers = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-1.png',
    alt: 'Phillip Bothman',
    name: 'Phillip Bothman',
    role: 'Founder & CEO',
    description: 'A visionary leader driving innovation and collaboration.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-2.png',
    alt: 'James Kenter',
    name: 'James Kenter',
    role: 'Engineering Manager',
    description: 'Leading teams to build smart, scalable solutions.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-3.png',
    alt: 'Cristofer Kenter',
    name: 'Cristofer Kenter',
    role: 'Product Designer',
    description: 'Crafting intuitive and engaging user experiences.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-4.png',
    alt: 'Alena Lubin',
    name: 'Alena Lubin',
    role: 'Frontend Developer',
    description: 'Bringing designs to life with seamless interfaces.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-8.png',
    alt: 'Jayden Lipshultz',
    name: 'Jayden Lipshultz',
    role: 'Sales Lead',
    description: 'Driving business growth and strong client relationships.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-7.png',
    alt: 'Maria Donin',
    name: 'Maria Donin',
    role: 'Product Manager',
    description: 'Bridging business needs with impactful solutions.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-6.png',
    alt: 'Carter Saris',
    name: 'Carter Saris',
    role: 'UX Researcher',
    description: 'Uncovering insights to enhance user experiences.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-5.png',
    alt: 'Ahmad Donin',
    name: 'Ahmad Donin',
    role: 'Customer Success',
    description: 'Ensuring customer satisfaction and long-term success.',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      github: '#',
      instagram: '#'
    }
  }
]

const TeamPage = () => {
  return <Team teamMembers={teamMembers} />
}

export default TeamPage
