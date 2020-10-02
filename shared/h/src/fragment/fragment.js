import appendChildren from '@rex/h/src/h/appendChildren'
import extendAttributes from './extendAttributes'

export default (props, children) =>
  appendChildren(children, extendAttributes(props, document.createDocumentFragment()))
