import * as f from '@rex/f'
import hook from './hook'

export default (_target, _method, descriptor) =>
  f.assign(descriptor, { value: hook(descriptor.value) })
