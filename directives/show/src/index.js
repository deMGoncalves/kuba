export default (props, children) =>
  props.when
    ? children
    : []
