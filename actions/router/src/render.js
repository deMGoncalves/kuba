import * as f from '@kuba/f'
import params from './params'
import pathname from './pathname'
import urls from './urls'

const render = function (page) {
  const { url, listener, keys, values } = urls[page]

  params(
    f.pairs(
      f.zip(
        f.slice(f.exec(keys, url), 1),
        f.slice(f.exec(values, pathname), 1)
      )
    )
  )

  listener()
}

export default f.once(render)
