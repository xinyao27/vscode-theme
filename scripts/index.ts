import fs from 'node:fs/promises'
import prettier from 'prettier'
import getTheme from './theme'

console.log('starting')

await fs.mkdir('./themes', { recursive: true })

const lightJson = JSON.stringify(
  getTheme({
    color: 'light',
    name: 'Vesper Purple Light',
  }),
  null,
  2,
)
const darkJson = JSON.stringify(
  getTheme({
    color: 'dark',
    name: 'Vesper Purple Dark',
  }),
  null,
  2,
)
Promise.all([
  // light
  fs.writeFile('./themes/vesper-purple-light-color-theme.json', lightJson),
  // dark
  fs.writeFile('./themes/vesper-purple-dark-color-theme.json', darkJson),
  // js
  fs.writeFile(
    './themes/vesper-purple-color-theme.js',
    await prettier.format(`export default { light: ${lightJson}, dark: ${darkJson} }`, {
      parser: 'typescript',
      singleQuote: true,
    }),
  ),
])

console.log('finished')
