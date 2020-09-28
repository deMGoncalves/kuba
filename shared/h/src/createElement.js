import appendChildren from './appendChildren'
import extendAttributes from './extendAttributes'

export default (tagName, attributes, children) =>
  appendChildren(children, extendAttributes(attributes, document.createElement(tagName, { is: attributes.is })))
