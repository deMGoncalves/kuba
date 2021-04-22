import * as f from '@kuba/f'
import slot from './slot'

class Component {
  static execute (componentRef, props, children) {
    return componentRef(props, slot(children))
  }

  static is (tagNameOrComponent) {
    return f.is(Function, tagNameOrComponent)
  }
}

export default Component
