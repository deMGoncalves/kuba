import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (more) => (
  useEffect(() => more.mount(global.shapes))
)

export default middleware(effect)
