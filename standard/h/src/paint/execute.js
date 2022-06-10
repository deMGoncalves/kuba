import * as f from '@kuba/f'
import mount from './mount'

export default (component, entity, children) => (
  mount(component, entity, children),
  entity[f.dunder.tag]
)
