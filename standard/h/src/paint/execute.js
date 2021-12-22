import * as f from '@kuba/f'
import mixin from './mixin'

export default (component, entity, children) => (
  mixin(component, entity, children),
  entity[f.dunder.tag]
)
