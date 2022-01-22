import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const events = (zoom) => (
  echo.on('zoom:open', ({ src }) => zoom.open(src)),
  echo.on('zoom:close', () => zoom.close())
)

export default middleware(events)
