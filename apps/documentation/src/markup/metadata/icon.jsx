import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  f.forEach(
    ['icon', 'shortcut', 'apple-touch-icon'],
    rel => document.head.append(<link href={f.or(page.icon, 'https://rex-todomvc.web.app/rex.png')} rel={rel} type='image/png' />)
  )
