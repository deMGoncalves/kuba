import * as f from '@kuba/f'
import match from './match'
import render from './render'
import urls from './urls'

export default function (path, listener) {
  const { module, name } = listener
  const keys = new RegExp(f.replace(path, /(:)\w+/g, '$1([a-z0-9-]+)'), 'i')
  const values = new RegExp(`^${f.replace(path, /:\w+/g, '([a-z0-9-]+)')}$`, 'i')

  const page = module
    ? `${module}.${name}`
    : name

  f.assign(urls, {
    [page]: { path, listener, keys, values }
  })

  setTimeout(() =>
    match(page) && render(page)
  )
}
