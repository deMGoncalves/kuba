import * as f from '@kuba/f'
import urls from './urls'

export default (name, params = {}) =>
  f
    .from(params)
    .pipe(f.entries)
    .pipe(f.map(f.__, ([key, value]) => [`:${key}`, value]))
    .pipe(f.reduce(f.__, (path, args) => f.replace(path, ...args), urls[name]?.path))
    .done()
