import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (compare) => (
  useEffect(() => compare.changeShape(global.shape))
)

export default middleware(effect)
