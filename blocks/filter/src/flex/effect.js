import * as f from '@kuba/f'
import middleware from '@kuba/middleware'
import echo from '@kuba/echo'

const onChange = f.dunder.onChange

const effect = middleware((target) => (
  echo.on('filter:change', ({ key, value }) => (
    f.equal(key, 'flex') && target[onChange](f.len(value))
  ))
))

f.assign(effect, {
  onChange
})

export default effect
