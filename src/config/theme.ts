// Type Imports
import type { ThemeStyles } from '@/types/theme'

export const COMMON_STYLES = [
  'font-sans',
  'font-serif',
  'font-mono',
  'radius',
  'shadow-opacity',
  'shadow-blur',
  'shadow-spread',
  'shadow-offset-x',
  'shadow-offset-y',
  'letter-spacing',
  'spacing'
]

export const DEFAULT_FONT_SANS =
  "'Geist', 'Geist Fallback', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"

export const DEFAULT_FONT_SERIF =
  '"Geist", "Geist Fallback", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'

export const DEFAULT_FONT_MONO =
  '"Geist Mono", "Geist Mono Fallback", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'

// Default light theme styles
export const defaultLightThemeStyles: ThemeStyles['light'] = {
  background: 'oklch(1 0 0)',
  foreground: 'oklch(0.141 0.005 285.823)',
  card: 'oklch(1 0 0)',
  'card-foreground': 'oklch(0.141 0.005 285.823)',
  popover: 'oklch(1 0 0)',
  'popover-foreground': 'oklch(0.141 0.005 285.823)',
  primary: 'oklch(0.21 0.006 285.885)',
  'primary-foreground': 'oklch(0.985 0 0)',
  secondary: 'oklch(0.967 0.001 286.375)',
  'secondary-foreground': 'oklch(0.21 0.006 285.885)',
  muted: 'oklch(0.967 0.001 286.375)',
  'muted-foreground': 'oklch(0.552 0.016 285.938)',
  accent: 'oklch(0.967 0.001 286.375)',
  'accent-foreground': 'oklch(0.21 0.006 285.885)',
  destructive: 'oklch(0.577 0.245 27.325)',
  border: 'oklch(0.92 0.004 286.32)',
  input: 'oklch(0.92 0.004 286.32)',
  ring: 'oklch(0.705 0.015 286.067)',
  'chart-1': 'oklch(0.646 0.222 41.116)',
  'chart-2': 'oklch(0.6 0.118 184.704)',
  'chart-3': 'oklch(0.398 0.07 227.392)',
  'chart-4': 'oklch(0.828 0.189 84.429)',
  'chart-5': 'oklch(0.769 0.188 70.08)',
  radius: '0.625rem',
  sidebar: 'oklch(0.985 0 0)',
  'sidebar-foreground': 'oklch(0.141 0.005 285.823)',
  'sidebar-primary': 'oklch(0.21 0.006 285.885)',
  'sidebar-primary-foreground': 'oklch(0.985 0 0)',
  'sidebar-accent': 'oklch(0.967 0.001 286.375)',
  'sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
  'sidebar-border': 'oklch(0.92 0.004 286.32)',
  'sidebar-ring': 'oklch(0.705 0.015 286.067)',
  'font-sans': DEFAULT_FONT_SANS,
  'font-serif': DEFAULT_FONT_SERIF,
  'font-mono': DEFAULT_FONT_MONO,

  'shadow-color': 'hsl(0 0% 0%)',
  'shadow-opacity': '0.1',
  'shadow-blur': '3px',
  'shadow-spread': '0px',
  'shadow-offset-x': '0',
  'shadow-offset-y': '1px',

  'letter-spacing': '0em',
  spacing: '0.25rem'
}

// Default dark theme styles
export const defaultDarkThemeStyles: ThemeStyles['dark'] = {
  background: 'oklch(0.141 0.005 285.823)',
  foreground: 'oklch(0.985 0 0)',
  card: 'oklch(0.21 0.006 285.885)',
  'card-foreground': 'oklch(0.985 0 0)',
  popover: 'oklch(0.21 0.006 285.885)',
  'popover-foreground': 'oklch(0.985 0 0)',
  primary: 'oklch(0.92 0.004 286.32)',
  'primary-foreground': 'oklch(0.21 0.006 285.885)',
  secondary: 'oklch(0.274 0.006 286.033)',
  'secondary-foreground': 'oklch(0.985 0 0)',
  muted: 'oklch(0.274 0.006 286.033)',
  'muted-foreground': 'oklch(0.705 0.015 286.067)',
  accent: 'oklch(0.274 0.006 286.033)',
  'accent-foreground': 'oklch(0.985 0 0)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(1 0 0 / 10%)',
  input: 'oklch(1 0 0 / 15%)',
  ring: 'oklch(0.552 0.016 285.938)',
  'chart-1': 'oklch(0.488 0.243 264.376)',
  'chart-2': 'oklch(0.696 0.17 162.48)',
  'chart-3': 'oklch(0.769 0.188 70.08)',
  'chart-4': 'oklch(0.627 0.265 303.9)',
  'chart-5': 'oklch(0.645 0.246 16.439)',
  sidebar: 'oklch(0.21 0.006 285.885)',
  'sidebar-foreground': 'oklch(0.985 0 0)',
  'sidebar-primary': 'oklch(0.488 0.243 264.376)',
  'sidebar-primary-foreground': 'oklch(0.985 0 0)',
  'sidebar-accent': 'oklch(0.274 0.006 286.033)',
  'sidebar-accent-foreground': 'oklch(0.985 0 0)',
  'sidebar-border': 'oklch(1 0 0 / 10%)',
  'sidebar-ring': 'oklch(0.552 0.016 285.938)',

  'shadow-color': 'hsl(0 0% 0%)',
  'shadow-opacity': '0.1',
  'shadow-blur': '3px',
  'shadow-spread': '0px',
  'shadow-offset-x': '0',
  'shadow-offset-y': '1px',

  'letter-spacing': '0em',
  spacing: '0.25rem'
}

// Default theme state
export const defaultThemeState: ThemeStyles = {
  light: defaultLightThemeStyles,
  dark: defaultDarkThemeStyles
}
