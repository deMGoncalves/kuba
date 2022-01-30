import * as f from '@kuba/f'
import match from './match'
import render from './render'
import urls from './urls'

export default function (url, listener) {
  const { module, name } = listener
  const keys = new RegExp(f.replace(url, /(:)\w+/g, '$1([a-z0-9-_]+)'), 'i')
  const values = new RegExp(`^${f.replace(url, /:\w+/g, '([a-z0-9-_]+)')}$`, 'i')

  const page = module
    ? `${module}.${name}`
    : name

  f.assign(urls, {
    [page]: { url, listener, keys, values }
  })

  setTimeout(() =>
    match(page) && render(page)
  )
}
