import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (marca) => (
  useEffect(() => marca.changeValor(global.shape.marca.nome))
)

export default middleware(effect)
