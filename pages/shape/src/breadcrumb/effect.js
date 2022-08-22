import * as f from '@kuba/f'
import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const { onChange } = f.dunder

const effect = middleware((target) => (
  useEffect(() => target[onChange]([
    { page: 'home', title: 'Home' },
    { page: 'marca', params: { marca: global.shape.marca.slug }, title: global.shape.marca.nome },
    { page: 'shape', params: { marca: global.shape.marca.slug, shape: global.shape.slug }, title: global.shape.modelo }
  ]))
))

f.assign(effect, {
  onChange
})

export default effect
