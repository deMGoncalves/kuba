import * as f from '@rex/f'
import append from '@rex/h/src/h/append'

export default (props, children) =>
  append(f.flatten(children), document.createDocumentFragment())
