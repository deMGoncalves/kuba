export default (props, style) => ({
  ...props,
  className: [
    style.avatar,
    style[props.small && 'small'],
    style[props.large && 'large'],
    props.className
  ]
})
