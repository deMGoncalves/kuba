import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const effect = (site) => (
  useEffect(() => site.changeValor(global.marca.site))
)

export default middleware(effect)
