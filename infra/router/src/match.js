import * as f from '@kuba/f'
import pathname from './pathname'
import urls from './urls'

export default (page) =>
  f.test(urls[page].values, pathname)
