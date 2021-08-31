import echo from '@kuba/echo'
import { after } from '@kuba/middleware'

const change = (filter) => (
  echo.emit('filter:change', { ...filter.refining }),
  filter
)

export default after(change)
