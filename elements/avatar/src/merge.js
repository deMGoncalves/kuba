export default (props, style) =>
  ({ ...props, className: [style, props.className] })
