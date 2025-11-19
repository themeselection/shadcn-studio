import Blog from '@/components/shadcn-studio/blocks/blog-component-01/blog-component-01'

const blogCards = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-1.png',
    alt: 'Modern house',
    title: 'Laws of Transfer of Immovable Property',
    description:
      'Experience the charm of this lovely and cozy apartment, featuring warm decor and inviting spaces, perfect for relaxation and comfort, ideal for your next getaway.',
    blogLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-2.png',
    alt: 'Traditional house',
    title: 'Thane Development Plan 2026 & Master Plan',
    description:
      'Discover a unique nook in the heart of the city, offering convenience and access to attractions. Stylishly designed, it provides a comfortable retreat.',
    blogLink: '#'
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-3.png',
    alt: 'Modern house with pool',
    title: 'What is a Property Sale Agreement?',
    description:
      'Welcome to this charming independent house bedroom, featuring a spacious layout and cozy furnishings. Enjoy abundant natural light and peaceful.',
    blogLink: '#'
  }
]

const BlogPage = () => {
  return <Blog blogCards={blogCards} />
}

export default BlogPage
