import type { ReactNode } from 'react'

// Blog post content uses a small markdown-lite subset: **bold** and [text](url) links.
export function parseInline(text: string): ReactNode[] {
  const parts: ReactNode[] = []
  const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))

    if (match[1] !== undefined) {
      parts.push(<strong key={key++} className="text-white font-semibold">{match[1]}</strong>)
    } else {
      const href = match[3]
      const isExternal = /^https?:\/\//.test(href)
      parts.push(
        <a
          key={key++}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-[var(--steel-bright)] underline underline-offset-2 hover:text-white transition-colors"
        >
          {match[2]}
        </a>
      )
    }
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts
}
