import * as f from '@rex/f'

export default {
  isDev: f.equal(process.env.NODE_ENV, 'development'),
  isProd: f.equal(process.env.NODE_ENV, 'production')
}
