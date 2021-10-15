import { paint } from '@kuba/h'
import props from '@kuba/props'
import * as settings from '@kuba/settings'
import component from './component'

@paint(component)
@props
class Cover {
  get author () {
    return settings.app.author
  }

  get name () {
    return settings.app.name
  }

  get description () {
    return settings.app.description
  }
}

export default Cover
