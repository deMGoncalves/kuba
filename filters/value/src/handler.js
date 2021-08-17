export default (listener) =>
  (e) => (
    listener(e.target.value)
  )
