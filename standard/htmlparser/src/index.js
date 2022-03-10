import * as f from '@kuba/f'
import Fragment from './fragment'
import Root from './root'
import Tag from './tag'
import Text from './text'

f.not('window' in self) && (
  self.document = {
    body: Root.create('body'),
    createDocumentFragment: Fragment.execute,
    createElement: Tag.create,
    createTextNode: Text.create,
    head: Root.create('head'),
    self: Root.create('self')
  }
)
