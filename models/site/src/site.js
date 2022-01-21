import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import * as settings from '@kuba/settings'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
class Site {
  get name () {
    return settings.app.name
  }

  get url () {
    return settings.app.url
  }
}

export default Site
