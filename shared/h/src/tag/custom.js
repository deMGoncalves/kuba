import * as f from '@kuba/f'
import Tag from './tag'

class Custom extends Tag {
  reflow (tag) {
    this.attributes.reflow(tag.attributes)
    this.className.reflow(tag.className)
    this.events.reflow(tag.events)
    return this
  }

  static create (tagName, props, children) {
    return new Custom(tagName, props, children)
  }

  static is (nameOrComponent) {
    return f.test(/^\w+-/, nameOrComponent)
  }
}

export default Custom
