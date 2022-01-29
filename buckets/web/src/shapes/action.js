import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const action = (shapes) => (
  echo.on('shapes:more', () => shapes.mount())
)

export default middleware(action)
