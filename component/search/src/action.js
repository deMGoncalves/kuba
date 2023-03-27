import echo from '@kuba/echo'
import magic from '@kuba/magic'
import middleware from '@kuba/middleware'

const action = middleware(function (search) {
  echo.on('search:open', () => (search[action.open]()))
})

Object.assign(action, {
  open: magic.action_open
})

export default action
