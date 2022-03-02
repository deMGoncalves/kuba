import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (shelf) => (
  useEffect(() => shelf.changeMarcas(global.marcas))
)

export default middleware(effect)
