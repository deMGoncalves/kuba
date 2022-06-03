import * as f from '@kuba/f'
import Element from './element'

class Custom extends Element {
  update (custom) {
    super.willUpdate()
    Promise
      .all([
        this.attributes.update(custom.attributes),
        this.className.update(custom.className),
        this.events.update(custom.events)
      ])
      .then(() => super.didUpdate())
    return this
  }

  static is (target) {
    return f.test(/^\w+-/, target)
  }
}

export default Custom
