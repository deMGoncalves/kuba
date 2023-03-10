import env from '@kuba/env'

export default env.production ? '.kuba.autos' : 'localhost'
