import Show from '@kuba/show'
import env from '@kuba/env'

export default new Proxy({}, {
  get: (_, ambient) =>
    (_, children) =>
      Show({ when: env[`is${ambient}`] }, children)
})
