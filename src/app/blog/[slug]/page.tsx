import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ScrollReveal from '@/components/ScrollReveal'
import { BLOG_POSTS } from '@/lib/blogPosts'
import { parseInline } from '@/lib/blogRender'
import { WA_LINKS } from '@/lib/constants'

export function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} | The Custom ZM`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: ['/assets/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/assets/og-image.png'],
    },
  }
}

const CATEGORY_CTA: Record<string, { href: string; label: string; waLink: string }> = {
  'Laptop Wraps': { href: '/laptop-wraps', label: 'Explore Laptop Wraps', waLink: WA_LINKS.laptop },
  'Phone Covers': { href: '/phone-covers', label: 'Explore Phone Covers', waLink: WA_LINKS.phone },
  'Portraits': { href: '/portraits', label: 'Explore Portrait Prints', waLink: WA_LINKS.portrait },
}
const DEFAULT_CTA = { href: '/portfolio', label: 'See Our Work', waLink: WA_LINKS.general }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()

  const cta = CATEGORY_CTA[post.category] ?? DEFAULT_CTA

  return (
    <>
      {/* HEADER */}
      <section className="pt-32 pb-12 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="section-label hover:text-[var(--steel-bright)] transition-colors">
            &larr; The Journal
          </Link>
          <p className="section-label mt-6 mb-3">
            {post.category} · {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <h1 className="headline headline-chrome mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="pb-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <article>
              {post.content.map((para, i) => {
                const trimmed = para.trim()
                const isHeading = /^\*\*(.+)\*\*$/.test(trimmed)
                if (isHeading) {
                  return (
                    <h2 key={i} className="headline headline-chrome text-2xl mt-10 mb-3">
                      {trimmed.replace(/^\*\*|\*\*$/g, '')}
                    </h2>
                  )
                }
                return (
                  <p key={i} className="text-[#C4C4C4] text-base leading-relaxed mb-5">
                    {parseInline(para)}
                  </p>
                )
              })}
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#111111] text-center">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="headline headline-chrome mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              READY TO<br /><span className="text-[var(--steel-bright)]">MAKE IT YOURS?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={cta.waLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-base py-4 px-10">
                Order on WhatsApp &rarr;
              </a>
              <Link href={cta.href} className="btn-outline text-base py-4 px-10">
                {cta.label}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
