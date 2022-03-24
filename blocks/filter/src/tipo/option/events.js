import * as f from '@kuba/f'
import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const { onRemove } = f.dunder

const events = middleware((target) => (
  echo.on('tipo:remove', (value) => (
    f.equal(value, target.valor) && target[onRemove]()
  ))
))

f.assign(events, {
  onRemove
})

export default events
