import * as f from '@kuba/f'
import filters from '@kuba/h/src/filters'

const decorate = (handler, listener) => (
  filters.has(handler)
    ? filters.get(handler)(listener)
    : listener
)

export default f.curry(decorate)
