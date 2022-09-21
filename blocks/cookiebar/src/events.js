import { service } from '@kuba/marionette'
import echo from '@kuba/echo'

export default service((target) => (
  echo.on('cookie:open', () => target.onShow())
))
