import h from '@kuba/h'
import * as f from '@kuba/f'
import render from './render'

export default (page) =>
  f.forEach(
    ['icon', 'shortcut', 'apple-touch-icon'],
    rel => render(<link href={f.or(page.icon, '/favicon.ico')} rel={rel} type='image/x-icon' />)
  )
