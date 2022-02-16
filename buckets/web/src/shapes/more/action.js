import echo from '@kuba/echo'
import { after } from '@kuba/middleware'

const next = after(function (output) {
  echo.emit('shapes:more')
  return output
})

export {
  next
}
