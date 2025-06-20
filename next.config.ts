import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/theme-generator',
        permanent: true
      },
      {
        source: '/theme-editor',
        destination: '/theme-generator',
        permanent: true
      },
      {
        source: '/docs',
        destination: '/docs/getting-started/introduction',
        permanent: true
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
}

export default nextConfig
