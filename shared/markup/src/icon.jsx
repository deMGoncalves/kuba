import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (page) =>
  f.forEach(
    ['icon', 'shortcut', 'apple-touch-icon'],
    rel => render(<link href={f.or(page.icon, '/favicon.png')} rel={rel} type='image/png' />)
  )
