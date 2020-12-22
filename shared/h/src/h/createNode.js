import * as f from '@rex/f'
import extend from './extend'
import append from './append'

export default (tagName, props, children) =>
  f.compose(append(children), extend(props))(document.createElement(tagName, { is: props.is }))
