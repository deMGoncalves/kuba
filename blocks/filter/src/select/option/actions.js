import * as f from '@kuba/f'
import { service } from '@kuba/marionette'
import echo from '@kuba/echo'

export default service((option) => (
  echo.on(`${option.key()}:remove`, (value) => (
    f.equal(value, option.valor) && option.onRemove()
  ))
))
