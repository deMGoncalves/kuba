import { after } from '@kuba/middleware'
import echo from '@kuba/echo'

const next = after(function (output) {
  echo.emit('shapes:more')
  return output
})

export {
  next
}
