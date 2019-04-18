import * as r from 'ramda'
import appendChildren from './appendChildren'
import extendAttributes from './extendAttributes'

export default (tagName, attributes, children) =>
  r.compose(appendChildren(children), extendAttributes(attributes))(document.createElement(tagName))
