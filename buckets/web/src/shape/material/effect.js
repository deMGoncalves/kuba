import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (material) => (
  useEffect(() => material.changeValor(global.shape.material))
)

export default middleware(effect)
