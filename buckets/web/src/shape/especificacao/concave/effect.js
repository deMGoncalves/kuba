import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (concave) => (
  useEffect(() => concave.changeValor(global.shape.concave))
)

export default middleware(effect)
