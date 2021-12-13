export default (props, style) =>
  ({ ...props, className: [style.avatar, style[props.small], style[props.large], props.className] })
