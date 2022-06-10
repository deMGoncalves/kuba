import mount from './mount'

export default (component, entity, children) => (
  mount(component, entity, children),
  entity
)
