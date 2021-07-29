import * as f from '@kuba/f'
import tag from './tag'
import text from './text'

f.not('window' in self) && (
  self.document = {
    body: tag('body'),
    createDocumentFragment () {},
    createElement: tag,
    createTextNode: text,
    head: tag('head')
  }
)
