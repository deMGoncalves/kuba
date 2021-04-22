import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'
import kuba from './kuba.svg'

@paint(component)
@jsonld(data)
class Logo {
  #className
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
    return kuba
  }

  constructor (props) {
    this.#className = props.className
    this.#slot = props.slot
  }

  redirect () {
    location.assign(this.href)
    return this
  }
}

export default Logo
