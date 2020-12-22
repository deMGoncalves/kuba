import * as f from '@rex/f'
import appendChildren from '@rex/h/src/h/appendChildren'

export default (props, children) =>
  appendChildren(f.flatten(children), document.createDocumentFragment())
