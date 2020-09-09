import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  f.forEach(
    ['icon', 'shortcut', 'apple-touch-icon'],
    rel => render(document.head, <link href={f.or(page.icon, f.prop('icon', config))} rel={rel} type='image/png' />)
  )
