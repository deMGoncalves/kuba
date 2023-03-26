import echo from '@kuba/echo'
import magic from '@kuba/magic'
import middleware from '@kuba/middleware'

const action = middleware(function (navigation) {
  echo.on('navigation:open', () => (navigation[action.open]?.()))
})

Object.assign(action, {
  open: magic.action_open
})

export default action
