import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (laminas) => (
  useEffect(() => laminas.changeValor(global.shape.laminas))
)

export default middleware(effect)
