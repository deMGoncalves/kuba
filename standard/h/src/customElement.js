import * as f from '@kuba/f'
import Element from './element'
import lifeCycle, { event } from './lifeCycle'

class CustomElement extends Element {
  update (element) {
    lifeCycle.dispatch(this, event.WILL_UPDATE)
    Promise
      .all([
        this.attributes.update(element.attributes),
        this.className.update(element.className),
        this.events.update(element.events)
      ])
      .then(() => lifeCycle.dispatch(this, event.DID_UPDATE))
    return this
  }

  static is (target) {
    return f.test(/^\w+-/, target)
  }
}

export default CustomElement
