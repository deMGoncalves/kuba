import * as f from '@rex/f'

const magic = (key) =>
  (magic[key] = f.or(magic[key], Symbol(key)))

export default f.curry(magic)
