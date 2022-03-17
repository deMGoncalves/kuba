import { after } from '@kuba/middleware'
import echo from '@kuba/echo'

const remove = after(function (output) {
  echo.emit('compare:remove')
  return output
})

export default {
  remove
}
