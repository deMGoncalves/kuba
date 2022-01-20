import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (breadcrumb) => (
  useEffect(() => breadcrumb.changePaths([
    { page: 'shapes', title: 'Home' },
    { page: 'marca', params: { marca: global.marca.slug }, title: global.marca.nome }
  ]))
)

export default middleware(effect)
