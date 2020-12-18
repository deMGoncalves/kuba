import { paint } from '@rex/htmlparser'
import * as f from '@rex/f'
import component from './component'
import ghost from './kuba-ghost.png'
import jsonld from '@rex/json-ld'
import organization from './organization'
import primary from './kuba.png'

@paint(component)
@jsonld(organization)
class Logo {
  #className
  #color

  get className () {
    return f.or(this.#className, '')
  }

  get color () {
    return f.test(/^ghost$/, this.#color)
      ? 'ghost'
      : 'primay'
  }

  get name () {
    return 'Kuba'
  }

  get thumbnail () {
    return f.test(/^ghost$/, this.color)
      ? ghost
      : primary
  }

  get url () {
    return `https://${location.hostname}`
  }

  constructor (props) {
    this.#className = props.className
    this.#color = props.color
  }

  redirect () {
    location.assign('/')
    return this
  }
}

export default Logo
