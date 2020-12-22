import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (schema) =>
  f.forEach(
    ['icon', 'shortcut', 'apple-touch-icon'],
    rel => render(<link href={f.or(schema.icon, '/favicon.ico')} rel={rel} type='image/png' />)
  )
