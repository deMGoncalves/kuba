import h from '@h'
import * as f from '@f'

export default (page) =>
  f.forEach(
    ['icon', 'shortcut', 'apple-touch-icon'],
    rel => document.head.append(<link href={f.or(page.icon, 'https://zuen.store/zuen.png')} rel={rel} type='image/png' />)
  )
