import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import props from '@kuba/props'
import * as settings from '@kuba/settings'
import component from './component'
import data from './data'
import master from './kuba.svg'
import onColor from './kuba_onColor.svg'

@paint(component)
@jsonld(data)
@props
class Logo {
  #onColor

  get href () {
    return settings.app.url
  }

  get name () {
    return settings.app.name
  }

  get url () {
    return this.#onColor ? onColor : master
  }

  constructor (props) {
    this.#onColor = props.onColor
  }

  redirect () {
    location.assign(this.href)
    return this
  }
}

export default Logo
