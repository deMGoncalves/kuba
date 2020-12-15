import * as f from '@rex/f'

const createBlob = (blob) =>
  window.URL.createObjectURL(blob)

export default f.memoize(createBlob)
