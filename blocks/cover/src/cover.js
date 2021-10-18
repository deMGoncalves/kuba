import { paint } from '@kuba/h'
import props from '@kuba/props'
import * as settings from '@kuba/settings'
import component from './component'
import schema from './schema.json'

@paint(component)
@props
class Cover {
  #links

  get author () {
    return settings.app.author
  }

  get description () {
    return settings.app.description
  }

  get links () {
    return this.#links ??= schema.links
  }

  get name () {
    return settings.app.name
  }
}

export default Cover
