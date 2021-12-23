import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import * as settings from '@kuba/settings'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
@markup
class Roda {
  get description () {
    return settings.app.description
  }

  get title () {
    return 'Roda'
  }
}

export default Roda
