import * as f from '@kuba/f'
import slot from './slot'

class Component {
  static execute (componentRef, props, children) {
    return componentRef(props, slot(children))
  }

  static is (target) {
    return f.is(Function, target)
  }
}

export default Component
