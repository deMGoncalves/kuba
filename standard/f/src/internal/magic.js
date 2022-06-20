const magic = (key) => (
  (magic[key] ??= Symbol(key))
)

export default magic
