import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (nose) => (
  useEffect(() => nose.changeValor(global.shape.nose))
)

export default middleware(effect)
