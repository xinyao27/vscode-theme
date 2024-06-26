import { Themes, colors } from './colors'

export interface GetThemeOptions {
  color: 'light' | 'dark'
  name: string
  soft?: boolean
  black?: boolean
}

export function toArray<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr)) return arr
  return [arr]
}

export function getColors(style: 'light' | 'dark'): typeof colors {
  if (style === 'dark') {
    /* The array of light to dark colors are reversed to auto-generate dark theme */
    const darkColors: any = {}
    Object.entries(colors).forEach(([name, val]) => {
      if (name === 'black') darkColors.white = val
      else if (name === 'white') darkColors.black = val
      else darkColors[name] = [...toArray(val)].reverse()
    })
    return darkColors
  } else {
    return colors
  }
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function createThemeHelpers({ color, soft = false, black = false }: GetThemeOptions) {
  const pick = (options: { light?: string; dark?: string }) => options[color]

  const v = (key: keyof typeof Themes, op = '') => {
    let obj = black
      ? Themes[`black${capitalize(key)}` as keyof typeof Themes] || Themes[key]
      : soft
        ? Themes[`soft${capitalize(key)}` as keyof typeof Themes] || Themes[key]
        : Themes[key]

    if (typeof obj === 'string') obj = [obj, obj]

    return pick({ light: obj[1] + op, dark: obj[0] + op })
  }

  const colors = getColors(color)

  return {
    pick,
    colors,
    v,
  }
}
