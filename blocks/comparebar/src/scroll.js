import { after } from '@kuba/middleware'
import echo from '@kuba/echo'

const lock = after((output) => (
  echo.emit('overlayer:open'),
  output
))

const unlock = after((output) => (
  echo.emit('overlayer:close'),
  output
))

export default {
  lock,
  unlock
}
