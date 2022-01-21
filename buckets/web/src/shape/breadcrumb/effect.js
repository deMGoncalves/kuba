import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (breadcrumb) => (
  useEffect(() => breadcrumb.changePaths([
    { page: 'shapes', title: 'Home' },
    { page: 'marca', params: { marca: global.shape.marca.slug }, title: global.shape.marca.nome },
    { page: 'shape', params: { marca: global.shape.slug }, title: global.shape.modelo }
  ]))
)

export default middleware(effect)
