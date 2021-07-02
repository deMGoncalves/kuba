import notCustomElement from './notCustomElement'

export default (that, tag) => (
  that.attributes.reflow(tag.attributes),
  that.className.reflow(tag.className),
  that.events.reflow(tag.events),
  notCustomElement(that) && that.children.reflow(tag.children)
)
