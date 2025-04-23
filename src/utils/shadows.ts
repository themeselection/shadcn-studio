// Type Imports
import type { ThemeStyleProps } from '@/types/theme'
import type { ColorFormat } from './color-converter'

// Util Imports
import { colorFormatter } from './color-converter'

export const getShadowMap = (styles: ThemeStyleProps, colorFormat: ColorFormat = 'oklch') => {
  const shadowColor = styles['shadow-color'] || 'hsl(0 0% 0%)'
  const formattedColor = colorFormatter(shadowColor, colorFormat)
  const offsetX = styles['shadow-offset-x'] || '0px'
  const offsetY = styles['shadow-offset-y'] || '1px'
  const blur = styles['shadow-blur'] || '2px'
  const spread = styles['shadow-spread'] || '0px'
  const opacity = parseFloat(styles['shadow-opacity'] || '0.1')

  // Function to create a color with the right opacity based on the color format
  const createColorWithOpacity = (baseOpacity: number) => {
    const finalOpacity = (opacity * baseOpacity).toFixed(2)

    // Extract the color parts based on format
    if (colorFormat === 'oklch') {
      // Extract the oklch values without the function wrapper
      const oklchValues = formattedColor.match(/oklch\((.*?)\)/)?.[1] || '0 0 0'

      return `oklch(${oklchValues} / ${finalOpacity})`
    } else if (colorFormat === 'hsl') {
      // Extract hsl values
      const hslValues = formattedColor.match(/hsl\((.*?)\)/)?.[1] || '0 0% 0%'

      return `hsl(${hslValues} / ${finalOpacity})`
    } else if (colorFormat === 'rgb') {
      // Extract rgb values
      const rgbValues = formattedColor.match(/rgb\((.*?)\)/)?.[1] || '0 0 0'

      return `rgb(${rgbValues} / ${finalOpacity})`
    }

    // Fallback to original color with no opacity control
    return formattedColor
  }

  const secondLayer = (fixedOffsetY: string, fixedBlur: string): string => {
    // Use the same offsetX as the first layer
    const offsetX2 = offsetX

    // Use the fixed offsetY specific to the shadow size
    const offsetY2 = fixedOffsetY

    // Use the fixed blur specific to the shadow size
    const blur2 = fixedBlur

    // Calculate spread relative to the first layer's spread variable
    const spread2 = (parseFloat(spread?.replace('px', '') ?? '0') - 1).toString() + 'px'

    // Use the same color function with appropriate opacity
    const color2 = createColorWithOpacity(1.0)

    return `${offsetX2} ${offsetY2} ${blur2} ${spread2} ${color2}`
  }

  // Map shadow names to their CSS variable string structures
  const shadowMap: { [key: string]: string } = {
    // Single layer shadows - use base variables directly
    'shadow-2xs': `${offsetX} ${offsetY} ${blur} ${spread} ${createColorWithOpacity(0.5)}`,
    'shadow-xs': `${offsetX} ${offsetY} ${blur} ${spread} ${createColorWithOpacity(0.5)}`,
    'shadow-2xl': `${offsetX} ${offsetY} ${blur} ${spread} ${createColorWithOpacity(2.5)}`,

    // Two layer shadows - use base vars for layer 1, mix fixed/calculated for layer 2
    'shadow-sm': `${offsetX} ${offsetY} ${blur} ${spread} ${createColorWithOpacity(1.0)}, ${secondLayer('1px', '2px')}`,
    shadow: `${offsetX} ${offsetY} ${blur} ${spread} ${createColorWithOpacity(1.0)}, ${secondLayer('1px', '2px')}`,
    'shadow-md': `${offsetX} ${offsetY} ${blur} ${spread} ${createColorWithOpacity(1.0)}, ${secondLayer('2px', '4px')}`,
    'shadow-lg': `${offsetX} ${offsetY} ${blur} ${spread} ${createColorWithOpacity(1.0)}, ${secondLayer('4px', '6px')}`,
    'shadow-xl': `${offsetX} ${offsetY} ${blur} ${spread} ${createColorWithOpacity(1.0)}, ${secondLayer('8px', '10px')}`
  }

  return shadowMap
}

// Function to set shadow CSS variables
export function setShadowVariables(styles: ThemeStyleProps) {
  const root = document.documentElement
  const shadows = getShadowMap(styles)

  Object.entries(shadows).forEach(([name, value]) => {
    root.style.setProperty(`--${name}`, value)
  })
}
