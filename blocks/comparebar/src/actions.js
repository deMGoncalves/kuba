import { service } from '@kuba/marionette'
import echo from '@kuba/echo'

export default service((comparebar) => (
  echo.on('compare:add', () => comparebar.open()),
  echo.on('compare:open', () => comparebar.open())
))
