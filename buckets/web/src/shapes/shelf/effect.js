import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (shelf) => (
  useEffect(() => shelf.changeShapes(global.shapes))
)

export default middleware(effect)
