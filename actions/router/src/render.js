import * as f from '@kuba/f'
import pathname from './pathname'
import urls from './urls'

const render = function (page) {
  const { path, listener, keys, values } = urls[page]
  const descriptor = f.pairs(
    f.zip(
      f.slice(f.exec(keys, path), 1),
      f.slice(f.exec(values, pathname), 1)
    )
  )

  listener(descriptor)
}

export default f.once(render)
