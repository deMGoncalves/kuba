import Component from './component'
import Element from './element'

export default (nodeName, attrs, ...children) => {
  attrs ??= {}
  if (Element.is(nodeName)) return Element.create(nodeName, attrs, children)
  if (Component.is(nodeName)) return Component.execute(nodeName, attrs, children)
}
