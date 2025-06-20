// Next Imports
import type { MetadataRoute } from 'next'

// Config Imports
import { categories } from '@/config/components'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '/theme-generator',
    '/components',
    '/docs/getting-started/introduction',
    ...categories.filter(category => !category.isComingSoon).map(category => `/docs/components/${category.slug}`)
  ].map(route => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}${route}`
  }))

  return routes
}
