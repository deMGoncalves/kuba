import * as f from '@kuba/f'
import Element from './element'
import lifeCycle, { event } from './lifeCycle'

class CustomElement extends Element {
  update (element) {
    lifeCycle.dispatch(this, event.WILL_UPDATE)
    Promise
      .all([
        this.events.update(element.events),
        this.attributes.update(element.attributes),
        this.className.update(element.className)
      ])
      .then(() => lifeCycle.dispatch(this, event.DID_UPDATE))
    return this
  }

  static is (target) {
    return f.test(/^\w+-/, target)
  }
}

export default CustomElement
