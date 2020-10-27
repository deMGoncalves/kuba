import h, { render } from '@rex/h'
import * as f from '@rex/f'
import schema from '@rex/markup/src/schema.json'

export default (page) =>
  f.forEach(
    ['icon', 'shortcut', 'apple-touch-icon'],
    rel => render(document.head, <link href={f.or(page.icon, f.prop('icon', schema))} rel={rel} type='image/png' />)
  )
