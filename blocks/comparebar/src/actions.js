import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const actions = (comparebar) => (
  echo.on('compare:add', () => comparebar.open()),
  echo.on('compare:open', () => comparebar.open())
)

export default middleware(actions)
