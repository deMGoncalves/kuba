import slot from '@rex/htmlparser/src/slot'

export default (component, props, children) =>
  component(props, slot(children))
