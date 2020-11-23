import * as f from '@rex/f'
import appendChildren from '@rex/h/src/h/appendChildren'
import extendAttributes from './extendAttributes'

export default (props, children) =>
  appendChildren(f.flatten(children), extendAttributes(props, document.createDocumentFragment()))
