import component from './component'
import merge from './merge'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      component(merge(props, type), children)
})
