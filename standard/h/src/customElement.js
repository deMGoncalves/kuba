import * as f from '@kuba/f'
import Element from './element'

class CustomElement extends Element {
  update (element) {
    super.willUpdate()
    Promise
      .all([
        this.attributes.update(element.attributes),
        this.className.update(element.className),
        this.events.update(element.events)
      ])
      .then(() => super.didUpdate())
    return this
  }

  static is (target) {
    return f.test(/^\w+-/, target)
  }
}

export default CustomElement
