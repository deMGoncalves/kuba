import appendChildren from './appendChildren'

export default (payload) =>
  appendChildren(payload.children, document.createDocumentFragment())
