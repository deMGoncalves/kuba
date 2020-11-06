import { paint } from '@rex/h'
import * as f from '@rex/f'
import hook from '@rex/hook'
import component from './component'
import jsonLD from './jsonLD'
import rexsnap from './rexsnap.png'

const oneOff = f.magic('oneOff')

@paint(component)
@hook(jsonLD)
class Logo {
  get color () {
    return this[oneOff].color
  }

  get name () {
    return 'Rexsnap'
  }

  get src () {
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
