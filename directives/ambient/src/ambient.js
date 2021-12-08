import { Show } from '@kuba/h'
import env from '@kuba/env'

export default new Proxy({}, {
  get: (_, ambient) =>
    (_, children) =>
      Show({ if: env[`is${ambient}`] }, children)
})
