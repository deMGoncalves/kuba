import { paint } from '@rex/h'
import hook from '@rex/hook'
import component from './component'
import jsonLD from './jsonLD'
import photosnap from './photosnap.png'

@paint(component)
@hook(jsonLD)
class Logo {
  get name () {
    return 'Photosnap'
  }

  get src () {
    return photosnap
  }

  get url () {
    return `https://${location.hostname}`
  }

  redirect () {
    location.assign(this.url)
    return this
  }
}

export default Logo
