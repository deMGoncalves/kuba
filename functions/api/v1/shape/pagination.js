export default ({ page = 1, size = 24 }) =>
  [
    page * size - size,
    page * size - 1
  ]
