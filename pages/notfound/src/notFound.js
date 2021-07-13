import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
@markup
class NotFound {
  get description () {
    return __settings.app.description
  }

  get robots () {
    return 'noindex, nofollow'
  }

  get title () {
    return `Página não encontrada - ${__settings.app.title}`
  }
}

export default NotFound
