import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'
import Ghost from './ghost.svg'
import Primary from './primary.svg'

@paint(component)
@jsonld(data)
class Logo {
  #className
  #ghost
  #slot

  get className () {
    return this.#className
  }

  get href () {
    return __settings.app.url
  }

  get name () {
    return __settings.app.name
  }

  get slot () {
    return this.#slot
  }

  get url () {
    return this.#ghost ? Ghost : Primary
  }

  constructor (props) {
    this.#className = props.className
    this.#ghost = props.ghost
    this.#slot = props.slot
  }

  redirect () {
    location.assign(this.href)
    return this
  }
}

export default Logo
