import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (lixa) => (
  useEffect(() => lixa.changeValor(global.shape.lixa))
)

export default middleware(effect)
