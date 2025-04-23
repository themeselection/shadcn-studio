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
    theme: 'github-dark'
  })

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs
  }) as JSX.Element
}

const CodeBlock = ({ code, lang, initial, preHighlighted }: Props) => {
  const [content, setContent] = useState(preHighlighted || initial || null)

  useLayoutEffect(() => {
    if (preHighlighted) {
      setContent(preHighlighted)

      return
    }

    let isMounted = true

    if (code) {
      highlight(code, lang).then(result => {
        if (isMounted) setContent(result)
      })
    } else {
      setContent(<pre className='rounded-md bg-zinc-950 p-4'>No code available</pre>)
    }

    return () => {
      isMounted = false
    }
  }, [code, lang, preHighlighted])

  return content ? (
    <div className='*:outline-none! [&_code]:font-mono [&_code]:text-[13px] [&_pre]:max-h-[450px] [&_pre]:overflow-auto [&_pre]:rounded-md [&_pre]:bg-zinc-950! [&_pre]:p-4 [&_pre]:leading-snug dark:[&_pre]:bg-zinc-900!'>
      {content}
    </div>
  ) : (
    <pre className='rounded-md bg-zinc-950 p-4'>Loading...</pre>
  )
}

export default CodeBlock
