import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (nome) => (
  useEffect(() => nome.changeValor(global.marca.nome))
)

export default middleware(effect)
