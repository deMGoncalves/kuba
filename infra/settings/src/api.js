import env from '@kuba/env'

export default {
  host: env.isProd ? `//${location.hostname}/api` : `//${location.hostname}:${location.port}/api`
}
