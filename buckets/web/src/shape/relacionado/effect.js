import { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (relacionados) => (
  useEffect(() => relacionados.mount())
)

export default middleware(effect)
