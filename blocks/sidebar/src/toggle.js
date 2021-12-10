import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const toggle = (sidebar) =>
  echo.on('sidebar:open', () => sidebar.open())

export default middleware(toggle)
