import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
@markup
class Structure {
  get description () {
    return __settings.app.description
  }

  get title () {
    return `Structure - ${__settings.app.title}`
  }
}

export default Structure
