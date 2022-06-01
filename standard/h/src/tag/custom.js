import * as f from '@kuba/f'
import Element from './element'

class Custom extends Element {
  reflow (vCustom) {
    this.attributes.reflow(vCustom.attributes)
    this.className.reflow(vCustom.className)
    this.events.reflow(vCustom.events)
    return this
  }

  static is (target) {
    return f.test(/^\w+-/, target)
  }
}

export default Custom
