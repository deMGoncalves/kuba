import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (wheelbase) => (
  useEffect(() => wheelbase.changeValor(global.shape.wheelbase.valor))
)

export default middleware(effect)
