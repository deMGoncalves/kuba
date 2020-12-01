import { paint } from '@rex/h'
import * as f from '@rex/f'
import ldjson from '@rex/ldjson'
import { urlFor } from '@rex/router'
import * as structured from '@structured'
import component from './component'
import rexsnap from './rexsnap.png'

const $private = f.magic('private')

@paint(component)
@ldjson(structured.organization)
class Logo {
  get color () {
    return this[$private].color
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
    this[$private] = { ...props }
    return this
  }

  redirect () {
    location.assign(urlFor('home'))
    return this
  }
}

export default Logo
