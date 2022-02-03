import echo from '@kuba/echo'
import { after } from '@kuba/middleware'

const add = after(function (output) {
  echo.emit('compare:add')
  return output
})

export default {
  add
}
