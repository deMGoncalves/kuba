import { after } from '@kuba/middleware'
import echo from '@kuba/echo'

const remove = after((output) => (
  echo.emit('compare:remove'),
  output
))

export default {
  remove
}
