import { paint } from '@rex/h'
import * as f from '@rex/f'
import ldjson from '@rex/ldjson'
import * as structured from '@structured'
import component from './component'

const $private = f.magic('private')

@paint(component)
@ldjson(structured.website)
class Site {
  get className () {
    return this[$private].className
  }

  get name () {
    return 'Kuba'
  }

  get url () {
    return location.href
  }

  constructor (props) {
    this[$private] = { ...props }
    return this
  }
}

export default Site
