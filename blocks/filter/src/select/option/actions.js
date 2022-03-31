import * as f from '@kuba/f'
import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const { onRemove } = f.dunder

const actions = middleware((option) => (
  echo.on(`${option.key}:remove`, (value) => (
    f.equal(value, option.valor) && option[onRemove]()
  ))
))

f.assign(actions, {
  onRemove
})

export default actions
