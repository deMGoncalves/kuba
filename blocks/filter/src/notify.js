import echo from '@kuba/echo'
import { after } from '@kuba/middleware'

function notify () {
  echo.emit('filter:change', { ...this.refining })
  return this
}

export default after(notify)
