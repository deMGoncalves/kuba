import middleware from '@kuba/middleware'
import echo from '@kuba/echo'

const connected = (lazy) => (
  echo.on(`lazy:${lazy.channel}`, async () => {
    const { default: component } = await lazy.require()
    lazy.render(component)
  })
)

export default middleware(connected)
