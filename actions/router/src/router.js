import * as f from '@kuba/f'
import match from './match'
import render from './render'
import urls from './urls'

export default function (path, listener) {
  const { name } = listener
  const params = new RegExp(f.replace(path, /(:)\w+/g, '$1([a-z0-9-]+)'), 'i')
  const router = new RegExp(`^${f.replace(path, /:\w+/g, '([a-z0-9-]+)')}$`, 'i')

  f.assign(urls, {
    [name]: { listener, params, path, router }
  })

  setTimeout(() =>
    match(name) && render(name)
  )
}
