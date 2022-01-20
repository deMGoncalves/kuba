import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (title) => (
  useEffect(() => title.changeValor(global.marca.nome))
)

export default middleware(effect)
