import createBlob from './createBlob'
import createURL from './createURL'

export default (script) =>
  new Worker(createURL(createBlob(script)))
