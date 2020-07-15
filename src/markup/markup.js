import * as f from '@f'
import metadata from './metadata'
import opengraph from './opengraph'
import structureddata from './structureddata'
import twittercard from './twittercard'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() =>
      f.forEach(
        [metadata, opengraph, structureddata, twittercard],
        m => m(page)
      )
    )

    return page
  }
