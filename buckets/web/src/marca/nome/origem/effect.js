import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (origem) => (
  useEffect(() => origem.changeValor(global.marca.origem?.valor))
)

export default middleware(effect)
