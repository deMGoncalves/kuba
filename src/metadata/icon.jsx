import h from '@h'
import * as f from '@f'

export default (page) =>
  ['icon', 'shortcut', 'apple-touch-icon']
    .forEach(rel => document.head.append(<link href={f.or(page.icon, 'https://zuen.store/zuen.png')} rel={rel} type='image/png' />))
