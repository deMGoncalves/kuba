import * as f from '@kuba/f'
import middleware from '@kuba/middleware'

export default f.compose(middleware, f.idle, f.chain)
