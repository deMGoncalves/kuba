import { after } from '@kuba/middleware'
import echo from '@kuba/echo'

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
