import * as f from '@kuba/f'
import Tag from './tag'

class Custom extends Tag {
  reflow (tag) {
    this.attributes.reflow(tag.attributes)
    this.className.reflow(tag.className)
    this.events.reflow(tag.events)
    return this
  }

  static is (target) {
    return f.test(/^\w+-/, target)
  }
}

export default Custom
