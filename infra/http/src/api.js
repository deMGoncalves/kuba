import env from '@kuba/env'

export default {
  url: '//kuba.ink/api/v1',
  worker: env.isProd
    ? '//api.kuba.ink'
    : '//localhost:8787'
}
