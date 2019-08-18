import compose from 'ramda/src/compose'
import appendChildren from './appendChildren'
import extendAttributes from './extendAttributes'

export default (tagName, attributes, children) =>
  compose(appendChildren(children), extendAttributes(attributes))(document.createElement(tagName, { is: attributes.is }))
