import env from '@kuba/env'
import console from './console'

export default env.isProd && console()
