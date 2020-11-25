import { paint } from '@rex/h'
import { urlFor } from '@rex/router'
import ldjson from '@rex/ldjson'
import component from './component'
import organization from './organization'
import rexsnap from './rexsnap.png'

@paint(component)
@ldjson(organization)
class Logo {
  #color

  get color () {
    return this.#color
  }

  get name () {
    return 'Rexsnap'
  }

  get thumbnail () {
    return rexsnap
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
