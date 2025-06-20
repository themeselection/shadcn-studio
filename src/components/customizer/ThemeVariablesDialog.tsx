// React Imports
import { useState } from 'react'
import type { ReactNode } from 'react'

// Type Imports
import type { ThemeStyleProps, ThemeStyles } from '@/types/theme'
import type { ColorFormat } from '@/utils/color-converter'

// Component Imports
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import CodeBlock from '@/components/CodeBlock'
import CopyButton from '@/components/CopyButton'

// Config Imports
import { defaultLightThemeStyles, defaultDarkThemeStyles } from '@/config/theme'

// Util Imports
import { generateThemeCode } from '@/utils/theme-style-generator'
import { presets } from '@/utils/theme-presets'

type ThemeVariablesDialogProps = {
  lightTheme?: Partial<ThemeStyleProps>
  darkTheme?: Partial<ThemeStyleProps>
  trigger?: ReactNode
  activeTheme?: string | null
}

const ThemeVariablesDialog = ({ lightTheme, darkTheme, trigger, activeTheme }: ThemeVariablesDialogProps) => {
  // States
  const [colorFormat, setColorFormat] = useState<ColorFormat>('oklch')

  const themeStyles: ThemeStyles = {
    light: { ...defaultLightThemeStyles, ...lightTheme },
    dark: { ...defaultDarkThemeStyles, ...darkTheme }
  }

  const themeCSS = generateThemeCode(themeStyles, colorFormat)

  // Check if the active theme exists in presets
  const isPresetTheme = activeTheme ? activeTheme in presets : false

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[780px]'>
        <DialogHeader>
          <DialogTitle>Theme Variables</DialogTitle>
          <DialogDescription>Copy these CSS variables to use your theme in other projects.</DialogDescription>
        </DialogHeader>
        <div className='flex min-w-0 flex-col gap-6'>
          {/* Theme Installation Command - Only show for preset themes */}
          {activeTheme && isPresetTheme && (
            <div className='overflow-hidden rounded-md border'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/cli/cli-light.png'
                alt='CLI Light'
                className='dark:hidden'
              />
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/cli/cli-dark.png'
                alt='CLI Dark'
                className='hidden dark:block'
              />
            </div>
          )}

          <div className='bg-sidebar relative overflow-hidden rounded-md border'>
            <div className='sticky top-0 w-full p-2'>
              <Select value={colorFormat} onValueChange={(value: ColorFormat) => setColorFormat(value)}>
                <SelectTrigger className='focus:border-border bg-card w-fit cursor-pointer gap-1 border outline-hidden focus:ring-transparent focus-visible:border'>
                  <SelectValue placeholder='Format' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='oklch'>OKLCH</SelectItem>
                  <SelectItem value='hsl'>HSL</SelectItem>
                  <SelectItem value='rgb'>RGB</SelectItem>
                  <SelectItem value='hex'>HEX</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <CodeBlock code={themeCSS} lang='css' />
            <CopyButton source={themeCSS} className='dark' toast='Theme variables' />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ThemeVariablesDialog
