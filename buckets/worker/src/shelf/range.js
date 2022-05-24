export default ({ page = 1, size = 24 }) => ({
  start: (page * size - size),
  end: (page * size - 1)
})
