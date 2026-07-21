import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blogPosts'

const BASE_URL = 'https://thecustomzm.com'

const STATIC_ROUTES = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/laptop-wraps', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/phone-covers', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/portraits', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map(route => ({
    url: `${BASE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const postEntries = BLOG_POSTS.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticEntries, ...postEntries]
}
