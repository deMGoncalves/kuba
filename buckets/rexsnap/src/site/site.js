import { paint } from '@rex/h'
import * as f from '@rex/f'
import jsonld from '@rex/jsonld'
import * as structured from '@structured'
import component from './component'

const oneOff = f.magic('oneOff')

@paint(component)
@jsonld(structured.website)
class Site {
  get className () {
    return this[oneOff].className
  }

  get name () {
    return 'Rexsnap'
  }

  get url () {
    return location.href
  }

  constructor (props) {
    this[oneOff] = { ...props }
    return this
  }
}

export default Site
