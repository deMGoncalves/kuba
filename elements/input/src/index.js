import merge from './merge'
import input from './input'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      input(merge(props, type), children)
})
