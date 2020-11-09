import { paint } from '@rex/h'
import * as f from '@rex/f'
import jsonld from '@rex/jsonld'
import * as structured from '@structured'
import component from './component'
import rexsnap from './rexsnap.png'

const oneOff = f.magic('oneOff')

@paint(component)
@jsonld(structured.organization)
class Logo {
  get color () {
    return this[oneOff].color
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
    this[oneOff] = { ...props }
    return this
  }

  redirect () {
    location.assign('/')
    return this
  }
}

export default Logo
