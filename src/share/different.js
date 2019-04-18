import { arity, compose, curry, equal, not } from './'

export default (a, b) =>
  not(equal(a, b))
