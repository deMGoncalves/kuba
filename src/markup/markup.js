import metadata from './metadata'
import opengraph from './opengraph'
import structureddata from './structureddata'
import twittercard from './twittercard'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() =>
      [
        metadata,
        opengraph,
        structureddata,
        twittercard
      ].forEach(m => m(page)))

    return page
  }
