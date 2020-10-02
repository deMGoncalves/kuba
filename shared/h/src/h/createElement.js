import * as f from '@rex/f'
import extendAttributes from '@rex/h/src/extendAttributes'
import appendChildren from './appendChildren'

export default (tagName, attributes, children) =>
  f.compose(appendChildren(children), extendAttributes(attributes))(document.createElement(tagName, { is: attributes.is }))
