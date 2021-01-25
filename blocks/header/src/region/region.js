import h, { paint } from '@rex/htmlparser'
import component from './component'

@paint(component)
class Region {
  #className

  get className () {
    return this.#className
  }

  constructor (props) {
    this.#className = props.className
  }
}

export default Region
