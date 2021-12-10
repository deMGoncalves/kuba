import echo from '@kuba/echo'
import { after } from '@kuba/middleware'

const lock = after(function (output) {
  echo.emit('overlayer:open')
  return output
})

const unlock = after(function (output) {
  echo.emit('overlayer:close')
  return output
})

export default {
  lock,
  unlock
}
