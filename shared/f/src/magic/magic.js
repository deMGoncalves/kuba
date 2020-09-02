import curry from '@rex/f/src/curry'
import or from '@rex/f/src/or'
import symbol from './symbol'

const magic = (key) =>
  (magic[key] = or(magic[key], symbol(key)))

export default curry(magic)
