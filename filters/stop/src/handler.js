export default (listener) =>
  (e) => (
    e.stopPropagation(),
    listener(e)
  )
