import h, { Fragment } from '@rex/h'

export default (props, children) =>
  props.if ? children : <></>
