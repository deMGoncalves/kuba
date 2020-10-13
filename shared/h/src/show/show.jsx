import h from '@rex/h/src/h'
import Fragment from '@rex/h/src/fragment'

export default (props, children) =>
  props.if ? children : <Fragment />
