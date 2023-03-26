import echo from '@kuba/echo'
import magic from '@kuba/magic'
import middleware from '@kuba/middleware'

const action = middleware(function (navigation) {
  echo.on('navigation:close', () => (navigation[action.toggle]?.(false)))
  echo.on('navigation:open', () => (navigation[action.toggle]?.(true)))
})

Object.assign(action, {
  toggle: magic.action_toggle
})

export default action
