import slot from '@rex/h/src/slot'

export default (component, props, children) =>
  component(props, slot(children))
