import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import PlotterLine from '@/components/PlotterLine'
import { BLOG_POSTS } from '@/lib/blogPosts'

export const metadata: Metadata = {
  title: 'Blog | The Custom ZM — Custom Laptop Wraps, Phone Covers & Portraits Lusaka Zambia',
  description: "Ideas, guides and stories on custom laptop wraps, phone covers and portrait prints from Lusaka's premier custom studio, The Custom ZM.",
}

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label mb-4">The Custom ZM</p>
          <PlotterLine center />
          <h1 className="headline headline-chrome mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            THE JOURNAL
          </h1>
          <p className="text-[#888] text-sm max-w-xl mx-auto">
            Ideas, guides and stories on custom laptop wraps, phone covers and portrait prints — from Lusaka&apos;s premier custom studio.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={(i % 6) * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full neon-border bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="section-label">{post.category}</span>
                  <h2 className="headline headline-chrome text-xl mt-3 mb-3 leading-tight">{post.title}</h2>
                  <p className="text-[#888] text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#555] pt-4 border-t border-[rgba(255,255,255,0.04)]">
                    <span>
                      {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="text-[var(--steel-bright)] group-hover:translate-x-1 transition-transform inline-block">
                      Read &rarr;
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
