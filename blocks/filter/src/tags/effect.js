import * as f from '@kuba/f'
import echo from '@kuba/echo'
import middleware from '@kuba/middleware'

const { onChange } = f.dunder

const effect = middleware((target) => (
  echo.on('filter:change', ({ key, value }) => (
    target[onChange](key, value)
  ))
))

f.assign(effect, {
  onChange
})

export default effect
