import * as f from '@f'

const magic = (key) =>
  (magic[key] = f.or(magic[key], Symbol(key)))

export default f.curry(magic)
