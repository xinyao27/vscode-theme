import fs from 'node:fs/promises'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true }).then(() =>
  Promise.all([
    fs.writeFile(
      './themes/vesper-purple-color-theme.json',
      JSON.stringify(
        getTheme({
          color: 'dark',
          name: 'Vesper Purple',
        }),
        null,
        2,
      ),
    ),
  ]),
)

console.log('finished')
