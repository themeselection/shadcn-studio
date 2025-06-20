'use client'

// React Imports
import { Fragment, useLayoutEffect, useState } from 'react'
import type { JSX } from 'react'

// Third-party Imports
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki/bundle/web'
import type { BundledLanguage } from 'shiki/bundle/web'

type Props = {
  code: string | null
  lang: BundledLanguage
  initial?: JSX.Element
  preHighlighted?: JSX.Element | null
}

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

const CodeBlock = ({ code, lang, initial }: Props) => {
  const [content, setContent] = useState(initial || null)

  useLayoutEffect(() => {
    let isMounted = true

    if (code) {
      highlight(code, lang).then(result => {
        if (isMounted) setContent(result)
      })
    } else {
      setContent(<pre className='bg-sidebar rounded-md p-4 text-sm'>No code available</pre>)
    }

    return () => {
      isMounted = false
    }
  }, [code, lang])

  return content ? (
    <div className='[&_pre]:bg-sidebar! h-full *:outline-none! [&_code]:font-mono [&_code]:text-[13px] [&_pre]:h-full [&_pre]:max-h-[350px] [&_pre]:overflow-auto [&_pre]:p-4 [&_pre]:leading-snug'>
      {content}
    </div>
  ) : (
    <pre className='bg-sidebar rounded-md p-4 text-sm'>Loading...</pre>
  )
}

export default CodeBlock
