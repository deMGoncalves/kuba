import * as f from '@kuba/f'
import middleware from '@kuba/middleware'
import echo from '@kuba/echo'

const onRemove = f.dunder.onRemove

const events = middleware((target) => (
  echo.on('origem:remove', (value) => (
    f.equal(value, target.valor) && target[onRemove]()
  ))
))

f.assign(events, {
  onRemove
})

export default events
