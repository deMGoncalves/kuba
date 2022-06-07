import * as f from '@kuba/f'

const merge = (props, style) => ({
  ...props,
  className: [
    style.avatar,
    style[props.small && 'small'],
    style[props.large && 'large'],
    props.className
  ]
})

export default f.memoize(merge)
