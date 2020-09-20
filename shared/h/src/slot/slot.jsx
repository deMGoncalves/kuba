import h, { Fragment } from '@rex/h'

export default (_, children) =>
  new Proxy(children, {})
