import is from 'ramda/src/is'
import map from 'ramda/src/map'

const mapComponent = child =>
  is(Function, child) ? child() : child

export default (children) =>
  map(mapComponent, children)
