import * as f from '@kuba/f'
import pathname from './pathname'
import urls from './urls'

export default (name) =>
  f.test(urls[name].router, pathname)
