'use client'

// React Imports
import { createContext, useContext, useEffect } from 'react'
import type { ReactNode } from 'react'

// React Imports
import type { ThemeStyleProps, ThemeStyles } from '@/types/theme'

// Hook Imports
import { useSettings } from '@/hooks/useSettings'

// Utils Imports
import { colorFormatter } from '@/utils/color-converter'
import { setShadowVariables } from '@/utils/shadows'

// Config Imports
import { COMMON_STYLES } from '@/config/theme'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const COMMON_NON_COLOR_KEYS = COMMON_STYLES

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
  toggleTheme: () => null
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

const applyCommonStyles = (root: HTMLElement, themeStyles: ThemeStyles) => {
  Object.entries(themeStyles)
    .filter(([key]) => COMMON_NON_COLOR_KEYS.includes(key as (typeof COMMON_NON_COLOR_KEYS)[number]))
    .forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--${key}`, value)
      }
    })
}

const applyThemeColors = (root: HTMLElement, themeStyles: ThemeStyles, mode: Theme) => {
  Object.entries(themeStyles[mode]).forEach(([key, value]) => {
    if (typeof value === 'string' && !COMMON_NON_COLOR_KEYS.includes(key as (typeof COMMON_NON_COLOR_KEYS)[number])) {
      const hslValue = colorFormatter(value, 'oklch')

      root.style.setProperty(`--${key}`, hslValue)
    }
  })
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { settings, updateSettings } = useSettings()

  useEffect(() => {
    const root = window.document.documentElement
    const mode = settings.mode === 'system' ? 'light' : settings.mode // Default to light if system
    const themeStyles = settings.theme.styles

    if (!themeStyles) {
      root.removeAttribute('style')

      return
    }

    // Apply common styles (fonts, radius, etc.)
    applyCommonStyles(root, themeStyles.light as ThemeStyles)

    // Apply theme colors
    applyThemeColors(root, themeStyles as ThemeStyles, mode)

    // Apply shadow variables if they exist in the current mode's styles
    setShadowVariables(themeStyles[mode] as ThemeStyleProps)
  }, [settings.mode, settings.theme.styles])

  const value = {
    theme: settings.mode as Theme,
    setTheme: (theme: Theme) => {
      updateSettings({ mode: theme })
    },
    toggleTheme: () => {
      const newMode = settings.mode === 'light' ? 'dark' : 'light'

      updateSettings({ mode: newMode })
    }
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
