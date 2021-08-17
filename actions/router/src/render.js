import * as f from '@kuba/f'
import pathname from './pathname'
import urls from './urls'

const render = function (name) {
  const { listener, params, path, router } = urls[name]
  const descriptor = f.pairs(
    f.zip(
      f.slice(f.exec(params, path), 1, Infinity),
      f.slice(f.exec(router, pathname), 1, Infinity)
    )
  )

  listener(descriptor)
}

export default f.once(render)
