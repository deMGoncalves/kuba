const hide = (props, children) => (
  props.when
    ? []
    : children
)

export default hide
