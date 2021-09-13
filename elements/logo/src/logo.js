import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import props from '@kuba/props'
import component from './component'
import data from './data'
import Ghost from './ghost.svg'
import Primary from './primary.svg'

@paint(component)
@jsonld(data)
@props
class Logo {
  #ghost

  get href () {
    return __settings.app.url
  }

  get name () {
    return __settings.app.name
  }

  get url () {
    return this.#ghost ? Ghost : Primary
  }

  constructor (props) {
    this.#ghost = props.ghost
  }

  redirect () {
    location.assign(this.href)
    return this
  }
}

export default Logo
