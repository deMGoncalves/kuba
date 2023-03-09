function show (props, children) {
  return props.when ? children : []
}

export default show
