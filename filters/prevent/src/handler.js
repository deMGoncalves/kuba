export default (listener) =>
  (e) => (
    e.preventDefault(),
    listener(e)
  )
