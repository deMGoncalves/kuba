import * as f from '@rex/f'
import metadata from './metadata'
import opengraph from './opengraph'
import twittercard from './twittercard'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() =>
      f.forEach(
        [metadata, opengraph, twittercard],
        m => m(page)
      )
    )

    return page
  }
