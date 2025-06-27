'use client'

// React Imports
import { useState, useEffect, useCallback, useRef } from 'react'

// Third-party Imports
import { codeToHtml, createHighlighter } from 'shiki'
import type { BundledLanguage, Highlighter } from 'shiki'

let highlighterPromise: Promise<Highlighter> | null = null

// Initialize the highlighter once for the entire application
const getHighlighter = () => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: ['html', 'css', 'js', 'ts', 'tsx', 'json']
    })
  }

  return highlighterPromise
}

// Start loading the highlighter as soon as possible
if (typeof window !== 'undefined') {
  getHighlighter().catch(error => {
    console.error('Failed to initialize Shiki highlighter:', error)
  })
}

export const useShiki = () => {
  // States
  const [isHighlighterReady, setIsHighlighterReady] = useState(false)
  const [highlightedCache, setHighlightedCache] = useState<Record<string, string>>({})

  // Refs
  const highlighterRef = useRef<Highlighter | null>(null)

  useEffect(() => {
    // Try to load the highlighter immediately when the component mounts
    getHighlighter()
      .then(highlighter => {
        highlighterRef.current = highlighter
        setIsHighlighterReady(true)
      })
      .catch(error => {
        console.error('Failed to initialize syntax highlighter:', error)
      })

    return () => {
      setIsHighlighterReady(false)
      setHighlightedCache({})
    }
  }, [])

  const highlightCode = useCallback(
    async (code: string, lang: string) => {
      if (!isHighlighterReady && !highlighterRef.current) {
        try {
          // If not ready yet, try to get and use the highlighter directly
          highlighterRef.current = await getHighlighter()
          setIsHighlighterReady(true)
        } catch (error) {
          console.error('Error getting highlighter:', error)

          return code
        }
      }

      // Create a cache key from the code and language
      const cacheKey = `${lang}:${code}`

      // Check if we already have this highlighted code in cache
      if (highlightedCache[cacheKey]) {
        return highlightedCache[cacheKey]
      }

      try {
        const highlighted = await codeToHtml(code, {
          lang: lang as BundledLanguage,
          themes: {
            light: 'github-light',
            dark: 'github-dark'
          }
        })

        // Store in cache
        setHighlightedCache(prev => ({
          ...prev,
          [cacheKey]: highlighted
        }))

        return highlighted
      } catch (error) {
        console.error(`Error highlighting code with language ${lang}:`, error)

        return code
      }
    },
    [isHighlighterReady, highlightedCache]
  )

  return {
    highlightCode,
    isHighlighterReady: isHighlighterReady || highlighterRef.current !== null,
    highlightedCache
  }
}
