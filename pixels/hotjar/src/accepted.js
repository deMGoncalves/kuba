import * as f from '@kuba/f'
import cookie from '@kuba/cookie'

export default f.equal(cookie.getItem('_kuba.cookie'), 'yes')
