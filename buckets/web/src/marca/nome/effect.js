import * as f from '@kuba/f'
import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const onChange = f.dunder.onChange

const effect = (target) => (
  useEffect(() => target[onChange](global.marca.nome))
)

export default middleware(effect)
export {
  onChange
}
