import * as f from '@kuba/f'
import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const onChange = f.dunder.onChange

const effect = middleware((target) => (
  useEffect(() => target[onChange]([
    { page: 'home', title: 'Home' },
    { page: 'marca', params: { marca: global.marca?.slug }, title: global.marca?.nome }
  ]))
))

f.assign(effect, {
  onChange
})

export default effect
