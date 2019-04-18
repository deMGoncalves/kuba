import * as r from 'ramda'

const isEvent = (target) =>
  r.test(/^on[A-Z]/, target)

export default ([key]) =>
  isEvent(key)
