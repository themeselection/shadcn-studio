// Type Imports
import type { ThemeStyleProps } from '@/types/theme'

const sansSerifFontNames = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Geist',
  'Poppins',
  'Montserrat',
  'Outfit',
  'Plus Jakarta Sans',
  'DM Sans',
  'Nunito',
  'Barlow',
  'Source Code Pro',
  'Lato',
  'Gabriela',
  'Delius Swash Caps'
]

const serifFontNames = [
  'Merriweather',
  'Playfair Display',
  'Lora',
  'Geist',
  'Source Serif 4',
  'Libre Baskerville',
  'Space Grotesk',
  'PT Serif',
  'Nunito',
  'Lato',
  'Gabriela',
  'Delius Swash Caps'
]

const monoFontNames = [
  'JetBrains Mono',
  'Fira Code',
  'Source Code Pro',
  'Geist Mono',
  'IBM Plex Mono',
  'Roboto Mono',
  'Space Mono',
  'Delius Swash Caps'
]

export const fonts = {
  // Sans-serif fonts
  Inter: 'Inter, sans-serif',
  Roboto: 'Roboto, sans-serif',
  'Open Sans': 'Open Sans, sans-serif',
  Poppins: 'Poppins, sans-serif',
  Montserrat: 'Montserrat, sans-serif',
  Outfit: 'Outfit, sans-serif',
  'Plus Jakarta Sans': 'Plus Jakarta Sans, sans-serif',
  'DM Sans': 'DM Sans, sans-serif',
  'IBM Plex Sans': 'IBM Plex Sans, sans-serif',
  Nunito: 'Nunito, sans-serif',
  Lato: 'Lato, sans-serif',
  Geist: 'Geist, Geist Fallback, sans-serif',

  // Serif fonts
  Merriweather: 'Merriweather, serif',
  'Playfair Display': 'Playfair Display, serif',
  Lora: 'Lora, serif',
  'Source Serif 4': 'Source Serif 4, serif',
  'Libre Baskerville': 'Libre Baskerville, serif',
  'Space Grotesk': 'Space Grotesk, serif',
  'PT Serif': 'PT Serif, serif',
  Gabriela: 'Gabriela, Geist Fallback',
  'Delius Swash Caps': 'Delius Swash Caps, serif',

  // Monospace fonts
  'JetBrains Mono': 'JetBrains Mono, monospace',
  'Fira Code': 'Fira Code, monospace',
  'Source Code Pro': 'Source Code Pro, monospace',
  'Geist Mono': 'Geist Mono, Geist Mono Fallback, monospace',
  'IBM Plex Mono': 'IBM Plex Mono, monospace',
  'Roboto Mono': 'Roboto Mono, monospace',
  'Space Mono': 'Space Mono, monospace'
}

export const sansSerifFonts = Object.fromEntries(
  Object.entries(fonts).filter(([key]) => sansSerifFontNames.includes(key))
)
export const serifFonts = Object.fromEntries(Object.entries(fonts).filter(([key]) => serifFontNames.includes(key)))
export const monoFonts = Object.fromEntries(Object.entries(fonts).filter(([key]) => monoFontNames.includes(key)))

export const getAppliedThemeFont = (
  state: Partial<ThemeStyleProps> | undefined,
  fontKey: keyof ThemeStyleProps
): string | null => {
  if (!state) return null
  const fontSans = state[fontKey]

  // find key of font in fonts object based on value
  const key = Object.keys(fonts).find(key => fonts[key as keyof typeof fonts].includes(fontSans as string))

  return key ? key : null
}
