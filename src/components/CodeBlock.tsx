'use client'

// React Imports
import { Fragment, useEffect, useState } from 'react'
import type { JSX } from 'react'

// Third-party Imports
import { Loader2Icon } from 'lucide-react'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki/bundle/web'
import type { BundledLanguage } from 'shiki/bundle/web'

// Hook Imports
import { useShiki } from '@/hooks/useShiki'

export const highlight = async (code: string, lang: BundledLanguage) => {
  const out = await codeToHast(code, {
    lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark'
    }
  })

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs
  }) as JSX.Element
}

const CodeBlock = ({ code, lang }: { code: string | null; lang: BundledLanguage }) => {
  // States
  const [highlightedCode, setHighlightedCode] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Hooks
  const { highlightCode, isHighlighterReady } = useShiki()

  useEffect(() => {
    if (!isHighlighterReady) return

    const highlightTab = async () => {
      if (code) {
        try {
          const highlighted = await highlightCode(code, lang)

          setHighlightedCode(highlighted)
        } catch (error) {
          console.error('Error highlighting code:', error)
        }
      }
    }

    // Highlight active tab first
    highlightTab().then(() => {
      setIsLoading(false)
    })
  }, [isHighlighterReady, highlightCode, highlightedCode, code, lang])

  return isLoading ? (
    <div className='flex min-h-40 flex-1 items-center justify-center p-4'>
      <Loader2Icon className='text-muted-foreground size-5 animate-spin' />
    </div>
  ) : isHighlighterReady && highlightedCode ? (
    <div
      className='[&_pre]:bg-sidebar! h-full *:outline-none! [&_code]:font-mono [&_code]:text-[13px] [&_pre]:h-full [&_pre]:max-h-[350px] [&_pre]:overflow-auto [&_pre]:p-4 [&_pre]:leading-snug'
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  ) : (
    <div className='p-4'>
      <code className='text-sm'>{code}</code>
    </div>
  )
}

export default CodeBlock
