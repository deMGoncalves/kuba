import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import schema from './schema.json'

@paint(component)
@jsonld(data)
@markup
class Components {
  get description () {
    return schema.description
  }

  get title () {
    return schema.title
  }
}

export default Components
