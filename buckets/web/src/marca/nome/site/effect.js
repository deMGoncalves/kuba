import * as f from '@kuba/f'
import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const onChange = f.dunder.onChange

const effect = middleware((target) => (
  useEffect(() => target[onChange](global.marca.site))
))

f.assign(effect, {
  onChange
})

export default effect
