import echo from '@kuba/echo'
import magic from '@kuba/magic'
import media from '@kuba/media'
import middleware from '@kuba/middleware'

const action = middleware(function (search) {
  echo.on('search:open', () => search[action.open]())
  media('(min-width: 768px)').in(() => search[action.close]())
})

Object.assign(action, {
  close: magic.action_close,
  open: magic.action_open
})

export default action
