import * as f from '@rex/f'

const createBlob = (url) =>
  new Blob([`importScripts('${url}')`], { type: 'application/javascript' })

export default f.memoize(createBlob)
