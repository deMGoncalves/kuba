import createBlob from './createBlob'
import createURL from './createURL'

export default (publicPath, script) =>
  () =>
    new Worker(createURL(createBlob(`${publicPath}/${script}`)))
