import * as f from '@rex/f'
import urls from './urls'

export default (name, ...args) =>
  f.replace(urls[name], /(\(\[[az09\-_]+\]\+?\*?\))/g, f.call(f.shift, args))
