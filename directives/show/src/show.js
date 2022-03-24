const show = (props, children) => (
  props.when
    ? children
    : []
)

export default show
