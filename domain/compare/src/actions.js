import echo from '@kuba/echo'
import { after } from '@kuba/middleware'

const add = after(function (output) {
  echo.emit('compare:add')
  return output
})

const remove = after(function (output) {
  echo.emit('compare:remove')
  return output
})

export default {
  add,
  remove
}
