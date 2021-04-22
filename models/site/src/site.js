import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
class Site {
  get name () {
    return __settings.app.name
  }

  get url () {
    return __settings.app.url
  }
}

export default Site
