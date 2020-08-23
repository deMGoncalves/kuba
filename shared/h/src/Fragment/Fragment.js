import appendChildren from '@rex/h/src/appendChildren'

export default (_, children) =>
  appendChildren(children, document.createDocumentFragment())
