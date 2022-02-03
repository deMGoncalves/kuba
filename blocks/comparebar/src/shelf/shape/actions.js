import echo from '@kuba/echo'
import { after } from '@kuba/middleware'

const remove = after(function (output) {
  echo.emit('compare:remove')
  return output
})

export default {
  remove
}
