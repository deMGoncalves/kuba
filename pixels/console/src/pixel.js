import console from './console'
import env from '@kuba/env'

export default env.isProd && console()
