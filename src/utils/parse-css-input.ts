// Type Imports
import type { ThemeStyleProps } from '@/types/theme'

// Config Imports
import { COMMON_STYLES, defaultThemeState } from '@/config/theme'

export const variableNames = Object.keys(defaultThemeState.light)
const nonColorVariables = COMMON_STYLES
const VARIABLE_PREFIX = '--'

export const parseCssInput = (input: string) => {
  const lightColors: ThemeStyleProps = {} as ThemeStyleProps
  const darkColors: ThemeStyleProps = {} as ThemeStyleProps

  try {
    // Extract content from :root and .dark blocks
    const rootContent = extractCssBlockContent(input, ':root')
    const darkContent = extractCssBlockContent(input, '.dark')

    // Parse root content for light theme
    if (rootContent) {
      parseColorVariables(rootContent, lightColors, variableNames)
    }

    // Parse dark content for dark theme
    if (darkContent) {
      parseColorVariables(darkContent, darkColors, variableNames)
    }
  } catch (error) {
    console.error('Error parsing CSS input:', error)
  }

  return { lightColors, darkColors }
}

const extractCssBlockContent = (input: string, selector: string): string | null => {
  const regex = new RegExp(`${escapeRegExp(selector)}\\s*{([^}]+)}`)

  return input.match(regex)?.[1]?.trim() || null
}

const parseColorVariables = (cssContent: string, target: ThemeStyleProps, validNames: string[]) => {
  const variableDeclarations = cssContent.match(/--[^:]+:\s*[^;]+/g) || []

  variableDeclarations.forEach(declaration => {
    const [name, value] = declaration.split(':').map(part => part.trim())
    const cleanName = name.replace(VARIABLE_PREFIX, '')

    if (validNames.includes(cleanName)) {
      if (nonColorVariables.includes(cleanName)) {
        // For non-color variables, store as is
        target[cleanName as keyof ThemeStyleProps] = value

        return
      }

      // For color variables, just process the value without converting format
      const colorValue = processColorValue(value)

      target[cleanName as keyof ThemeStyleProps] = colorValue
    }
  })
}

const processColorValue = (value: string): string => {
  // Handle HSL values with space-separated components
  if (/^\d/.test(value)) {
    return `hsl(${value})`
  }

  // For all other formats (rgb, oklch, hsl, hex), keep as is
  value = value.trim()

  // Ensure proper spacing in rgb/rgba values
  if (value.startsWith('rgb')) {
    return value.replace(/\s+/g, ' ')
  }

  // Ensure proper spacing in hsl/hsla values
  if (value.startsWith('hsl')) {
    return value.replace(/\s+/g, ' ')
  }

  // Ensure proper spacing in oklch values
  if (value.startsWith('oklch')) {
    return value.replace(/\s+/g, ' ')
  }

  return value
}

// Helper function to escape regex special characters
const escapeRegExp = (string: string): string => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const parseShadowVariables = (cssContent: string) => {
  // Initialize objects to hold shadow properties
  const lightShadows: ThemeStyleProps = {} as ThemeStyleProps
  const darkShadows: ThemeStyleProps = {} as ThemeStyleProps

  try {
    // Extract content from :root and .dark blocks
    const rootContent = extractCssBlockContent(cssContent, ':root')
    const darkContent = extractCssBlockContent(cssContent, '.dark')

    // Parse shadow variables from light theme
    if (rootContent) {
      extractBasicShadowProperties(rootContent, lightShadows)
    }

    // Parse shadow variables from dark theme
    if (darkContent) {
      extractBasicShadowProperties(darkContent, darkShadows)
    }
  } catch (error) {
    console.error('Error parsing shadow variables:', error)
  }

  return { lightShadows, darkShadows }
}

// Extract only the basic shadow properties from a CSS string
const extractBasicShadowProperties = (cssContent: string, target: ThemeStyleProps) => {
  // Create a more efficient regex to match all shadow properties at once
  const directPropertiesRegex = /--shadow-(color|opacity|blur|spread|offset-x|offset-y):\s*([^;]+);/g

  // Set default values
  target['shadow-offset-x'] = '0'
  target['shadow-offset-y'] = '1px'
  target['shadow-blur'] = '3px'
  target['shadow-spread'] = '0px'
  target['shadow-color'] = 'hsl(0 0% 0%)'
  target['shadow-opacity'] = '0.1'

  // First check if any direct shadow properties exist
  let match
  let foundDirectProperties = false

  // Using a single regex with capture groups is more efficient than multiple regex executions
  while ((match = directPropertiesRegex.exec(cssContent)) !== null) {
    const property = `shadow-${match[1]}` // e.g., "shadow-color"
    const value = match[2].trim()

    target[property as keyof ThemeStyleProps] = value
    foundDirectProperties = true
  }

  // If we found direct properties, we can return early as these are more accurate
  if (foundDirectProperties) {
    return
  }

  // For shadow extraction, we'll use a more optimized approach:
  // 1. Use a single regex to extract all shadow definitions
  // 2. Prefer single-layer shadows over multi-layer ones

  const shadowRegex = /--shadow(?:-[a-z0-9]+)?:\s*([^;]+);/g
  const shadowValues = []

  // Collect all shadow values
  while ((match = shadowRegex.exec(cssContent)) !== null) {
    shadowValues.push({
      value: match[1],
      hasComma: match[1].includes(','),
      name: match[0].match(/--([^:]+):/)?.[1] || ''
    })
  }

  if (shadowValues.length === 0) {
    return // No shadow values found, stick with defaults
  }

  // Sort to prefer single-layer shadows (xs, 2xs) for easier parsing
  const orderedNames = ['shadow-2xs', 'shadow-xs', 'shadow-sm', 'shadow']

  // Find the best shadow to extract properties from
  const bestShadow =
    shadowValues
      .filter(s => !s.hasComma) // Prefer shadows without commas (single layer)
      .sort((a, b) => {
        // Sort by preferred order
        const aIndex = orderedNames.indexOf(a.name)
        const bIndex = orderedNames.indexOf(b.name)

        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
        if (aIndex !== -1) return -1
        if (bIndex !== -1) return 1

        return 0
      })[0] || shadowValues[0] // Fall back to any shadow if no single-layer shadow found

  if (!bestShadow) return

  // Process the selected shadow
  const parts = bestShadow.value.split(',')[0].trim().split(/\s+/)

  if (parts.length >= 5) {
    // Extract the basic shadow properties
    target['shadow-offset-x'] = parts[0]
    target['shadow-offset-y'] = parts[1]
    target['shadow-blur'] = parts[2]
    target['shadow-spread'] = parts[3]

    // Join remaining parts as they form the color
    const colorPart = parts.slice(4).join(' ')

    // Use a combined regex pattern for all color formats
    const colorRegex = /(?:hsl|rgb|oklch)\(([^/]+)(?:\/\s*([^)]+))?\)/
    const colorMatch = colorPart.match(colorRegex)

    if (colorMatch) {
      const [, colorValues, opacity] = colorMatch
      const colorType = colorPart.substring(0, 3) // "hsl", "rgb", or "okl"(ch)

      target['shadow-color'] = `${colorType}${colorType === 'okl' ? 'ch' : ''}(${colorValues})`

      if (opacity) {
        target['shadow-opacity'] = formatOpacity(opacity)
      }
    }
  }
}

// Helper function to format opacity value from different formats
const formatOpacity = (opacityStr: string): string => {
  const cleanOpacity = opacityStr.replace('%', '').trim()

  // If opacity is in decimal format (e.g., 0.50)
  if (cleanOpacity.includes('.')) {
    return parseFloat(cleanOpacity).toString()
  }

  // If opacity is in percentage format (e.g., 50%)
  else if (!isNaN(parseInt(cleanOpacity, 10))) {
    return (parseInt(cleanOpacity, 10) / 100).toString()
  }

  return '0.1' // Default fallback
}

export const parseLetterSpacing = (cssContent: string) => {
  const letterSpacing = cssContent.match(/--tracking-normal:\s*([^;]+);/)?.[1] || '0em'

  return letterSpacing
}
