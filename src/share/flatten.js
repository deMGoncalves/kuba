import curry from './curry'

export default (target) =>
  target.reduce((reducer, x) => reducer.concat(x), [])
