import chroma from 'chroma-js'

export type ColorFormat = 'hsl' | 'rgb' | 'oklch' | 'hex'

const formatNumber = (num: number, precision = 2) => {
  return Number.isInteger(num) ? num.toString() : num.toFixed(precision)
}

export const colorFormatter = (colorValue: string, format: ColorFormat = 'oklch'): string => {
  try {
    // Extract alpha value if present
    let alpha = 1
    let processedColor = colorValue

    // Handle hex colors with alpha
    if (colorValue.startsWith('#') && colorValue.length === 9) {
      const alphaHex = colorValue.slice(7, 9)

      alpha = parseInt(alphaHex, 16) / 255
      processedColor = colorValue.slice(0, 7)
    }

    // Handle percentage-based alpha values (like "10%")
    else if (colorValue.includes('/')) {
      const percentMatch = colorValue.match(/\/\s*([\d.]+)%?/)

      if (percentMatch) {
        // Handle both percentage and decimal values after /
        alpha = percentMatch[1].includes('.') ? parseFloat(percentMatch[1]) : parseInt(percentMatch[1]) / 100

        // Convert modern RGB syntax to rgba for chroma.js
        if (colorValue.startsWith('rgb')) {
          const rgbMatch = colorValue.match(/rgb\((.*?)\//)

          if (rgbMatch) {
            const [r, g, b] = rgbMatch[1].split(' ').map(n => parseInt(n.trim()))

            processedColor = `rgba(${r}, ${g}, ${b}, ${alpha})`
          }
        }

        // Convert modern HSL syntax to hsla for chroma.js
        else if (colorValue.startsWith('hsl')) {
          const hslMatch = colorValue.match(/hsl\((.*?)\//)

          if (hslMatch) {
            const [h, rawS, rawL] = hslMatch[1].split(' ').map(v => parseFloat(v.replace('%', '')))

            // Ensure s and l are in the correct range (0-100)
            const s = rawS > 1 ? rawS : rawS * 100
            const l = rawL > 1 ? rawL : rawL * 100

            // Format HSL values properly for chroma.js
            processedColor = `hsla(${h}, ${s}%, ${l}%, ${alpha})`
          }
        }
      }
    }

    // Handle HSL without alpha
    else if (colorValue.startsWith('hsl(')) {
      const hslMatch = colorValue.match(/hsl\((.*?)\)/)

      if (hslMatch) {
        const [h, rawS, rawL] = hslMatch[1].split(' ').map(v => parseFloat(v.replace('%', '')))

        // Ensure s and l are in the correct range (0-100)
        const s = rawS > 1 ? rawS : rawS * 100
        const l = rawL > 1 ? rawL : rawL * 100

        processedColor = `hsl(${h}, ${s}%, ${l}%)`
      }
    }

    // Handle legacy rgba/hsla format
    else if (colorValue.includes('rgba(') || colorValue.includes('hsla(')) {
      if (colorValue.startsWith('hsla(')) {
        const hslaMatch = colorValue.match(/hsla\((.*?),(.*?),(.*?),(.*?)\)/)

        if (hslaMatch) {
          const [, h, s, l, a] = hslaMatch
          const hue = parseFloat(h.trim())
          const sat = parseFloat(s.trim().replace('%', ''))
          const light = parseFloat(l.trim().replace('%', ''))

          alpha = parseFloat(a.trim())
          processedColor = `hsl(${hue}, ${sat}%, ${light}%)`
        }
      } else if (colorValue.startsWith('rgba(')) {
        const rgbaMatch = colorValue.match(/rgba\((.*?),(.*?),(.*?),(.*?)\)/)

        if (rgbaMatch) {
          const [, r, g, b, a] = rgbaMatch
          const red = parseInt(r.trim())
          const green = parseInt(g.trim())
          const blue = parseInt(b.trim())

          alpha = parseFloat(a.trim())
          processedColor = `rgb(${red}, ${green}, ${blue})`
        }
      }
    }

    // Handle modern rgb/hsl format with alpha
    else if (colorValue.match(/rgb\(.*?\/.*?\)/) || colorValue.match(/hsl\(.*?\/.*?\)/)) {
      const alphaMatch = colorValue.match(/\/\s*([\d.]+)\s*\)/)

      if (alphaMatch) {
        alpha = parseFloat(alphaMatch[1])
      }
    }

    // Handle special case for grayscale HSL values
    if (colorValue.includes('hsl(') && (colorValue.includes(' 0%') || colorValue.includes('0%,'))) {
      const matches = colorValue.match(/hsl\(\d+(?:\.\d+)?\s+\d+(?:\.\d+)?%\s+(\d+(?:\.\d+)?)%\)/)

      if (matches) {
        const l = parseFloat(matches[1])

        switch (format) {
          case 'oklch':
            return alpha < 1
              ? `oklch(${(l / 100).toFixed(2)} 0 0 / ${Math.round(alpha * 100)}%)`
              : `oklch(${(l / 100).toFixed(2)} 0 0)`

          case 'rgb': {
            const val = Math.round((l / 100) * 255)

            return alpha < 1 ? `rgb(${val} ${val} ${val} / ${alpha})` : `rgb(${val} ${val} ${val})`
          }

          case 'hex': {
            const val = Math.round((l / 100) * 255)
            const hex = val.toString(16).padStart(2, '0')

            return alpha < 1
              ? `#${hex}${hex}${hex}${Math.round(alpha * 255)
                  .toString(16)
                  .padStart(2, '0')}`
              : `#${hex}${hex}${hex}`
          }

          case 'hsl':
            return alpha < 1 ? `hsl(0 0% ${l}% / ${alpha})` : colorValue
          default:
            return colorValue
        }
      }
    }

    // Parse the color using chroma.js
    const color = chroma(processedColor)

    // Check if color is valid by attempting to get RGB values
    try {
      color.rgb()
    } catch {
      return colorValue
    }

    switch (format) {
      case 'hex': {
        const hexColor = color.hex()

        // Always include alpha if it's less than 1
        return alpha < 1
          ? hexColor.slice(0, 7) +
              Math.round(alpha * 255)
                .toString(16)
                .padStart(2, '0')
          : hexColor
      }

      case 'rgb': {
        const [r, g, b] = color.rgb()

        return alpha < 1
          ? `rgb(${Math.round(r)} ${Math.round(g)} ${Math.round(b)} / ${alpha})`
          : `rgb(${Math.round(r)} ${Math.round(g)} ${Math.round(b)})`
      }

      case 'hsl': {
        const [h, s, l] = color.hsl()

        // Handle grayscale values in HSL
        if (s === 0) {
          return alpha < 1 ? `hsl(0 0% ${Math.round(l * 100)}% / ${alpha})` : `hsl(0 0% ${Math.round(l * 100)}%)`
        }

        return alpha < 1
          ? `hsl(${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}% / ${alpha})`
          : `hsl(${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`
      }

      case 'oklch': {
        const [l, c, h] = color.oklch()

        // Handle grayscale values in OKLCH
        if (c < 0.002) {
          return alpha < 1
            ? `oklch(${formatNumber(l)} 0 0 / ${Math.round(alpha * 100)}%)`
            : `oklch(${formatNumber(l)} 0 0)`
        }

        return alpha < 1
          ? `oklch(${formatNumber(l)} ${formatNumber(c)} ${formatNumber(h)} / ${Math.round(alpha * 100)}%)`
          : `oklch(${formatNumber(l)} ${formatNumber(c)} ${formatNumber(h)})`
      }

      default:
        return colorValue
    }
  } catch (error) {
    console.warn('Color conversion error:', error)

    return colorValue
  }
}

export const convertToHSL = (colorValue: string): string => colorFormatter(colorValue, 'hsl')
