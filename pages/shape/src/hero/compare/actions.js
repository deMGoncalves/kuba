import { after } from '@kuba/middleware'
import echo from '@kuba/echo'

const add = after(function (output) {
  echo.emit('compare:add')
  return output
})

export default {
  add
}
