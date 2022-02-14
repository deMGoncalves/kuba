import * as f from '@kuba/f'
import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const onShow = f.dunder.onShow

const events = middleware((target) =>
  echo.on('cookie:open', () => target[onShow]())
)

f.assign(events, {
  onShow
})

export default events
