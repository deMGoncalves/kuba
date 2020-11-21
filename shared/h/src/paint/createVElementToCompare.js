import * as f from '@rex/f'
import * as d from '@rex/h/src/dunders'

export default (instance, component, children) =>
  f.assign(component(instance, children), { [d.target]: instance })
