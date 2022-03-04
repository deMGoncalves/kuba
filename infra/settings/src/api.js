import env from '@kuba/env'

export default {
  url: env.isProd ? `//${location.hostname}/api/v1` : `//${location.hostname}:${location.port}/api/v1`
}
