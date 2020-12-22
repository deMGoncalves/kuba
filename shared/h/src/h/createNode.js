import * as f from '@rex/f'
import extendAttributes from './extendAttributes'
import appendChildren from './appendChildren'

export default (tagName, props, children) =>
  f.compose(appendChildren(children), extendAttributes(props))(document.createElement(tagName, { is: props.is }))
