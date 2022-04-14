import env from '@kuba/env'

export default {
  domain: env.isProd ? '.kuba.ink' : 'localhost',
  expirespath: '',
  path: '/'
}
