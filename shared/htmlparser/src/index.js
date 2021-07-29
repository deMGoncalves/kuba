import tag from './tag'
import text from './text'

'window' in self
  ? Element.prototype.render = Element.prototype.append
  : self.document = {
    body: tag('body'),
    createDocumentFragment () {},
    createElement: tag,
    createTextNode: text,
    head: tag('head')
  }
