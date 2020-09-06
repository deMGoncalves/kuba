import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  f.forEach(
    ['icon', 'shortcut', 'apple-touch-icon'],
    rel => render(document.head, <link href={f.or(page.icon, '/rex.png')} rel={rel} type='image/png' />)
  )
