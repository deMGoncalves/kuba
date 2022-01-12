import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const toggle = (comparebar) =>
  echo.on('compare:open', () => comparebar.open())

export default middleware(toggle)
