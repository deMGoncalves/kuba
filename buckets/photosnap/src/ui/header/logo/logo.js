import { paint } from '@rex/h'
import hook from '@rex/hook'
import component from './component'
import jsonLD from './jsonLD'
import rexsnap from './rexsnap.png'

@paint(component)
@hook(jsonLD)
class Logo {
  get name () {
    return 'Rexsnap'
  }

  get src () {
    return rexsnap
  }

  get url () {
    return `https://${location.hostname}`
  }

  redirect () {
    location.assign('/')
    return this
  }
}

export default Logo
