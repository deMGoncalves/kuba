import schedule from '@kuba/schedule'
import echo from '@kuba/echo'

const connected = (lazy) =>
  echo.on(`lazy:${lazy.channel}`, async () => {
    const { default: component } = await lazy.require()
    lazy.render(component)
  })

export default schedule(connected)
