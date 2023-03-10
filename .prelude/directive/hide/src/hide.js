function hide (props, children) {
  return props.when ? [] : children
}

export default hide
