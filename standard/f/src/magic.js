import curry from './curry'

const magic = (key) => (
  (magic[key] ??= Symbol(key))
)

export default curry(magic)
