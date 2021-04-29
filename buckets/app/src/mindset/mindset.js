import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import schema from './schema.json'

@paint(component)
@jsonld(data)
@markup
class Mindset {
  get description () {
    return schema.description
  }

  get summary () {
    return schema.summary
  }

  get summary () {
    return schema.summary
  }

  get title () {
    return schema.title
  }
}

export default Mindset
