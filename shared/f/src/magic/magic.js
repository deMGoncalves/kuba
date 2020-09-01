import curry from '@rex/f/src/curry'
import or from '@rex/f/src/or'

const magic = (key) =>
  (magic[key] = or(magic[key], Symbol(key)))

export default curry(magic)
