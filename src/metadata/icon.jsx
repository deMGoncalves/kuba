import h from '@h'
import * as f from '@f'

const __icon__ = Symbol('icon')
const defaultIcon = 'https://dummyimage.com/192x192/1a1a1a/1a1a1a.png'

export default (page) =>
  ['icon', 'shortcut', 'apple-touch-icon']
    .forEach(rel => document.head.appendChild(<link href={f.or(page[__icon__], defaultIcon)} rel={rel} type='image/png' />))

export {
  __icon__
}
