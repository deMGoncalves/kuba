import * as f from '@kuba/f'
import hook from '@kuba/hook'
import lazyLoad from './lazyLoad'

export default hook(f.chain(lazyLoad))
