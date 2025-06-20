'use client'

import { useThemeConfig } from './ActiveTheme'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export const THEMES = [
  {
    name: 'Default',
    value: 'default'
  },
  {
    name: 'Neutral',
    value: 'neutral'
  },
  {
    name: 'Stone',
    value: 'stone'
  },
  {
    name: 'Zinc',
    value: 'zinc'
  },
  {
    name: 'Gray',
    value: 'gray'
  },
  {
    name: 'Slate',
    value: 'slate'
  },
  {
    name: 'Scaled',
    value: 'scaled'
  }
]
export type Theme = (typeof THEMES)[number]

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig()

  return (
    <Select value={activeTheme} onValueChange={setActiveTheme}>
      <SelectTrigger size='sm' className='w-32'>
        <SelectValue placeholder='Select a theme' />
      </SelectTrigger>
      <SelectContent align='end'>
        {THEMES.map(theme => (
          <SelectItem key={theme.name} value={theme.value}>
            {theme.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
