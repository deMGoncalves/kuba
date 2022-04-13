import * as f from '@kuba/f'
import key from './key'

export default f.equal(localStorage.getItem(key), null)
