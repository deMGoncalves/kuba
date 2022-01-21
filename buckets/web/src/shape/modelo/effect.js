import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (modelo) => (
  useEffect(() => modelo.changeValor(global.shape.modelo))
)

export default middleware(effect)
