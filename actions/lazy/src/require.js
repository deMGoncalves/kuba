import * as f from '@kuba/f'
import echo from '@kuba/echo'

const require = (lazy) =>
  echo.on(`lazy:${lazy.channel}`, async () => {
    const { default: component } = await lazy.require()
    lazy.render(component)
  })

export default f.idle(require)
