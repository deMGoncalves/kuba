import * as f from '@kuba/f'
import filters from '@kuba/h/src/filters'

const decorate = (handler, value) => (
  filters.has(handler)
    ? filters.get(handler)(value)
    : value
)

export default f.curry(decorate)
