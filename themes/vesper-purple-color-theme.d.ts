export interface TokenColor {
  name?: string
  scope: string | string[]
  settings: {
    foreground: string
    fontStyle?: string
  }
}

export interface Rule {
  token: string
  foreground: string
}

export interface Theme {
  name: string
  base: string
  colors: Record<string, string>
  tokenColors: TokenColor[]
  rules: Rule[]
}

const theme: Theme

export default theme
