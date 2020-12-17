import * as f from '@rex/f'
import { paint } from '@rex/sandbox'
import { urlFor } from '@rex/router'
import jsonld from '@rex/json-ld'
import component from './component'
import organization from './organization'
import kuba from './kuba.png'
import kubaInverse from './kuba_inverse.png'

@paint(component)
@jsonld(organization)
class Logo {
  #color

  get color () {
    return this.#color
  }

  get name () {
    return 'Kuba'
  }

  get thumbnail () {
    return f.cond(
      [f.equal('inverse'), f.always(kubaInverse)],
      [f.T, f.always(kuba)]
    )(this.color)
  }

  get url () {
    return `https://${location.hostname}`
  }

  constructor (props) {
    this.#color = props.color
    return this
  }

  redirect () {
    location.assign(urlFor('home'))
    return this
  }
}

export default Logo
