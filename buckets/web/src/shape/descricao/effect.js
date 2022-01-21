import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (descricao) => (
  useEffect(() => descricao.changeValor(global.shape.descricao))
)

export default middleware(effect)
