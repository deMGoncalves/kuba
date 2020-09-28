import * as f from '@rex/f'

export default (__target__, component, children) =>
  f.assign(component(__target__, children), { __target__ })
