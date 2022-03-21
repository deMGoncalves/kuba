import env from '@kuba/env'
import Show from '@kuba/show'

export default new Proxy({}, {
  get: (_, ambient) =>
    (_, children) =>
      Show({ when: env[`is${ambient}`] }, children)
})
