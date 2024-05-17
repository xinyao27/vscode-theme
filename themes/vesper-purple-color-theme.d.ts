interface TokenColor {
  name?: string
  scope: string | string[]
  settings: {
    foreground: string
    fontStyle?: string
  }
}

interface Rule {
  token: string
  foreground: string
}

interface ColorTheme {
  name: string
  base: string
  colors: Record<string, string>
  tokenColors: TokenColor[]
  rules: Rule[]
}

export default ColorTheme
