import slot from '@rex/h/src/slot'

export default (component, attributes, children) =>
  component(attributes, slot(children))
