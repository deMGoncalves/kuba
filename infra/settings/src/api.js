import env from '@kuba/env'

export default {
  url: env.isProd ? `//${location.hostname}/api` : `//${location.hostname}:${location.port}/api`
}
