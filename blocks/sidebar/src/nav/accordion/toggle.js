import * as f from '@kuba/f'
import echo from '@kuba/echo'
import middleware, { after } from '@kuba/middleware'

const toggle = middleware((accordion) =>
  echo.on('accordion:open', (id) => f.different(accordion.id, id) && accordion.close())
)

const open = after(function (output) {
  echo.emit('accordion:open', this.id)
  return [output]
})

f.assign(toggle, {
  open
})

export default toggle
