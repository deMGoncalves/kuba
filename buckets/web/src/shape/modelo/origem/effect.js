import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (origem) => (
  useEffect(() => origem.changeValor(global.shape.marca.origem.valor))
)

export default middleware(effect)
