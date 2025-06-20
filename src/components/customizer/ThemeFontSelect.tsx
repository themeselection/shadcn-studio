// React Imports
import { useMemo, useState } from 'react'

// Component Imports
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type ThemeFontSelectProps = {
  fonts: Record<string, string>
  defaultValue: string
  currentFont: string | null
  onFontChange: (font: string) => void
}

const ThemeFontSelect = ({ fonts, defaultValue, currentFont, onFontChange }: ThemeFontSelectProps) => {
  // States
  const [value, setValue] = useState(fonts[currentFont ?? defaultValue])

  const fontNames = useMemo(() => ['System', ...Object.keys(fonts)], [fonts])

  const onValueChange = (value: string) => {
    setValue(value)
    onFontChange(value)
  }

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className='h-12 w-full cursor-pointer'>
        <SelectValue placeholder='Select theme font' />
      </SelectTrigger>
      <SelectContent>
        {fontNames.map(fontName => (
          <SelectItem key={fontName} value={fonts[fontName] ?? defaultValue}>
            <span
              style={{
                fontFamily: fonts[fontName] ?? defaultValue
              }}
            >
              {fontName}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default ThemeFontSelect
