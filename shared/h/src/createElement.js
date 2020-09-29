import * as f from '@rex/f'
import appendChildren from './appendChildren'
import extendAttributes from './extendAttributes'

export default (tagName, attributes, children) =>
  f.compose(appendChildren(children), extendAttributes(attributes))(document.createElement(tagName, { is: attributes.is }))
