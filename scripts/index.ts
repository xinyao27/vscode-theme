import fs from 'node:fs/promises'
import prettier from 'prettier'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true }).then(async () => {
  const json = JSON.stringify(
    getTheme({
      color: 'dark',
      name: 'Vesper Purple',
    }),
    null,
    2,
  )
  Promise.all([
    fs.writeFile('./themes/vesper-purple-color-theme.json', json),
    fs.writeFile(
      './themes/vesper-purple-color-theme.js',
      await prettier.format(`export default ${json}`, { parser: 'typescript', singleQuote: true }),
    ),
  ])
})

console.log('finished')
