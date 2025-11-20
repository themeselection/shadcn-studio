// Third-party Imports
import { useState, useEffect, useCallback } from 'react'
import type { InputHTMLAttributes } from 'react'

// Type Imports
import type { ThemePreset, ThemeStyleProps } from '@/types/theme'

// Component Imports
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

// Hook Imports
import { useSettings } from '@/hooks/useSettings'

// Utils Imports
import { colorFormatter } from '@/utils/color-converter'

type ColorSwatchProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

type DebouncedInputProps = {
  value: string
  onChange: (value: string) => void
  debounce?: number
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

const DebouncedInput = ({ value: initialValue, onChange, debounce = 300, ...props }: DebouncedInputProps) => {
  // States
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    if (value === initialValue) return

    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, initialValue])

  return <input {...props} type='color' value={value} onChange={e => setValue(e.target.value)} />
}

export const ColorSwatch = ({ label, value, onChange }: ColorSwatchProps) => {
  // States
  const [localValue, setLocalValue] = useState(value)

  // Update local value when theme value changes
  useEffect(() => {
    setLocalValue(value)
  }, [value])

  // Convert color to hex for display
  const hexColor = colorFormatter(localValue, 'hex')

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <span className='text-sm font-medium'>{label}</span>
        <span className='text-muted-foreground font-mono text-xs'>{hexColor}</span>
      </div>
      <div className='flex items-center gap-2'>
        <div
          className='relative flex size-9.5 cursor-pointer items-center justify-center overflow-hidden rounded border'
          style={{ backgroundColor: localValue }}
        >
          <DebouncedInput
            id={`color-${label.replace(/\s+/g, '-').toLowerCase()}`}
            value={localValue}
            onChange={localValue => {
              setLocalValue(localValue)
              onChange(localValue)
            }}
            className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
          />
        </div>
        <input
          type='text'
          value={localValue}
          onChange={e => {
            setLocalValue(e.target.value)
            onChange(e.target.value)
          }}
          className='flex-1 rounded-md border px-3 py-2 text-sm'
        />
      </div>
    </div>
  )
}

const ThemeColorPanel = () => {
  // Hooks
  const { settings, updateSettings } = useSettings()

  const currentTheme = settings.theme.styles?.[settings.mode === 'system' ? 'light' : settings.mode] as
    | Partial<ThemeStyleProps>
    | undefined

  const updateColor = useCallback(
    (key: keyof ThemeStyleProps, value: string) => {
      if (!currentTheme) return

      // apply common styles to both light and dark modes
      if (key === 'font-sans' || key === 'font-serif' || key === 'font-mono' || key === 'radius') {
        updateSettings({
          theme: {
            ...settings.theme,
            styles: {
              ...settings.theme.styles,
              light: { ...settings.theme.styles?.light, [key]: value },
              dark: { ...settings.theme.styles?.dark, [key]: value }
            }
          }
        })

        return
      }

      updateSettings({
        theme: {
          ...settings.theme,
          styles: {
            ...settings.theme.styles,
            [settings.mode]: {
              ...settings.theme.styles?.[settings.mode as keyof ThemePreset],
              [key]: value
            }
          }
        }
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentTheme, settings.theme.styles]
  )

  return (
    <div className='space-y-6'>
      <Accordion type='multiple' defaultValue={['brand']} className='w-full space-y-4'>
        {/* Brand Colors */}
        <AccordionItem value='brand' className='rounded-lg border px-4'>
          <AccordionTrigger className='cursor-pointer py-3 text-base font-medium'>Brand Colors</AccordionTrigger>
          <AccordionContent className='space-y-3 pt-2 pb-4'>
            <ColorSwatch
              label='Primary'
              value={currentTheme?.primary || ''}
              onChange={value => updateColor('primary', value)}
            />
            <ColorSwatch
              label='Primary Foreground'
              value={currentTheme?.['primary-foreground'] || ''}
              onChange={value => updateColor('primary-foreground', value)}
            />
            <ColorSwatch
              label='Secondary'
              value={currentTheme?.secondary || ''}
              onChange={value => updateColor('secondary', value)}
            />
            <ColorSwatch
              label='Secondary Foreground'
              value={currentTheme?.['secondary-foreground'] || ''}
              onChange={value => updateColor('secondary-foreground', value)}
            />
            <ColorSwatch
              label='Destructive'
              value={currentTheme?.destructive || ''}
              onChange={value => updateColor('destructive', value)}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Base Colors */}
        <AccordionItem value='base' className='rounded-lg border px-4'>
          <AccordionTrigger className='cursor-pointer py-3 text-base font-medium'>Base Colors</AccordionTrigger>
          <AccordionContent className='space-y-3 pt-2 pb-4'>
            <ColorSwatch
              label='Background'
              value={currentTheme?.background || ''}
              onChange={value => updateColor('background', value)}
            />
            <ColorSwatch
              label='Foreground'
              value={currentTheme?.foreground || ''}
              onChange={value => updateColor('foreground', value)}
            />
            <ColorSwatch label='Card' value={currentTheme?.card || ''} onChange={value => updateColor('card', value)} />
            <ColorSwatch
              label='Card Foreground'
              value={currentTheme?.['card-foreground'] || ''}
              onChange={value => updateColor('card-foreground', value)}
            />
            <ColorSwatch
              label='Popover'
              value={currentTheme?.popover || ''}
              onChange={value => updateColor('popover', value)}
            />
            <ColorSwatch
              label='Popover Foreground'
              value={currentTheme?.['popover-foreground'] || ''}
              onChange={value => updateColor('popover-foreground', value)}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Other Colors */}
        <AccordionItem value='other' className='rounded-lg !border px-4'>
          <AccordionTrigger className='cursor-pointer py-3 text-base font-medium'>Other Colors</AccordionTrigger>
          <AccordionContent className='space-y-3 pt-2 pb-4'>
            <ColorSwatch
              label='Muted'
              value={currentTheme?.muted || ''}
              onChange={value => updateColor('muted', value)}
            />
            <ColorSwatch
              label='Muted Foreground'
              value={currentTheme?.['muted-foreground'] || ''}
              onChange={value => updateColor('muted-foreground', value)}
            />
            <ColorSwatch
              label='Accent'
              value={currentTheme?.accent || ''}
              onChange={value => updateColor('accent', value)}
            />
            <ColorSwatch
              label='Accent Foreground'
              value={currentTheme?.['accent-foreground'] || ''}
              onChange={value => updateColor('accent-foreground', value)}
            />
            <ColorSwatch
              label='Border'
              value={currentTheme?.border || ''}
              onChange={value => updateColor('border', value)}
            />
            <ColorSwatch
              label='Input'
              value={currentTheme?.input || ''}
              onChange={value => updateColor('input', value)}
            />
            <ColorSwatch label='Ring' value={currentTheme?.ring || ''} onChange={value => updateColor('ring', value)} />
          </AccordionContent>
        </AccordionItem>

        {/* Sidebar Colors */}
        <AccordionItem value='sidebar' className='rounded-lg !border px-4'>
          <AccordionTrigger className='cursor-pointer py-3 text-base font-medium'>Sidebar Colors</AccordionTrigger>
          <AccordionContent className='space-y-3 pt-2 pb-4'>
            <ColorSwatch
              label='Sidebar'
              value={currentTheme?.sidebar || ''}
              onChange={value => updateColor('sidebar', value)}
            />
            <ColorSwatch
              label='Sidebar Foreground'
              value={currentTheme?.['sidebar-foreground'] || ''}
              onChange={value => updateColor('sidebar-foreground', value)}
            />
            <ColorSwatch
              label='Sidebar Primary'
              value={currentTheme?.['sidebar-primary'] || ''}
              onChange={value => updateColor('sidebar-primary', value)}
            />
            <ColorSwatch
              label='Sidebar Primary Foreground'
              value={currentTheme?.['sidebar-primary-foreground'] || ''}
              onChange={value => updateColor('sidebar-primary-foreground', value)}
            />
            <ColorSwatch
              label='Sidebar Accent'
              value={currentTheme?.['sidebar-accent'] || ''}
              onChange={value => updateColor('sidebar-accent', value)}
            />
            <ColorSwatch
              label='Sidebar Accent Foreground'
              value={currentTheme?.['sidebar-accent-foreground'] || ''}
              onChange={value => updateColor('sidebar-accent-foreground', value)}
            />
            <ColorSwatch
              label='Sidebar Border'
              value={currentTheme?.['sidebar-border'] || ''}
              onChange={value => updateColor('sidebar-border', value)}
            />
            <ColorSwatch
              label='Sidebar Ring'
              value={currentTheme?.['sidebar-ring'] || ''}
              onChange={value => updateColor('sidebar-ring', value)}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Chart Colors */}
        <AccordionItem value='chart' className='rounded-lg !border px-4'>
          <AccordionTrigger className='cursor-pointer py-3 text-base font-medium'>Chart Colors</AccordionTrigger>
          <AccordionContent className='space-y-3 pt-2 pb-4'>
            <ColorSwatch
              label='Chart 1'
              value={currentTheme?.['chart-1'] || ''}
              onChange={value => updateColor('chart-1', value)}
            />
            <ColorSwatch
              label='Chart 2'
              value={currentTheme?.['chart-2'] || ''}
              onChange={value => updateColor('chart-2', value)}
            />
            <ColorSwatch
              label='Chart 3'
              value={currentTheme?.['chart-3'] || ''}
              onChange={value => updateColor('chart-3', value)}
            />
            <ColorSwatch
              label='Chart 4'
              value={currentTheme?.['chart-4'] || ''}
              onChange={value => updateColor('chart-4', value)}
            />
            <ColorSwatch
              label='Chart 5'
              value={currentTheme?.['chart-5'] || ''}
              onChange={value => updateColor('chart-5', value)}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ThemeColorPanel
