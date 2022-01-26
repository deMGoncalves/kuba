import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (tamanho) => (
  useEffect(() => tamanho.changeValor(global.shape.tamanho.valor))
)

export default middleware(effect)
