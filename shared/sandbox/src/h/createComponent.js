import slot from './slot'

export default (component, props, children) =>
  component(props, slot(children))
