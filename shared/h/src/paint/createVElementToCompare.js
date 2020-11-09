import * as f from '@rex/f'

export default (instance, component, children) =>
  f.assign(component(instance, children), { [f.magic('h/target')]: instance })
