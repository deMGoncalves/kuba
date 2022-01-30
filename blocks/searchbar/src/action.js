import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const action = (searchbar) => (
  echo.on('search:open', () => searchbar.open())
)

export default middleware(action)
