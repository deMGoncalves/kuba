import mixin from './mixin'

export default (component, entity, children) => (
  mixin(component, entity, children),
  entity
)
