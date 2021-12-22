import * as f from '@kuba/f'
import slot from './slot'

class Component {
  static execute (component, props, children) {
    return component(props, slot(children))
  }

  static is (target) {
    return f.is(Function, target)
  }
}

export default Component
