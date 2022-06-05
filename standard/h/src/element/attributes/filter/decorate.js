import filters from '@kuba/h/src/filters'

export default (handler, value) => (
  filters.has(handler)
    ? filters.get(handler)(value)
    : value
)
