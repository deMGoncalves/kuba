import * as f from '@rex/f'

export default (state, component, children) =>
  f.assign(component(state, children), { [f.magic('__state__')]: state })
