import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (tail) => (
  useEffect(() => tail.changeValor(global.shape.tail))
)

export default middleware(effect)
