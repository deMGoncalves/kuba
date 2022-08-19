import env from '@kuba/env'

export default {
  worker: env.isProd
    ? '//api.kuba.ink'
    : '//api.kuba.ink'
}
