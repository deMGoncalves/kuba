import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import props from '@kuba/props'
import * as settings from '@kuba/settings'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
@props
class Site {
  get description () {
    return settings.app.description
  }

  get name () {
    return settings.app.name
  }

  get url () {
    return settings.app.url
  }
}

export default Site
