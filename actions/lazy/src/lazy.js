import { paint, repaint } from '@kuba/h'
import schedule from '@kuba/schedule'
import component from './component'
import require from './require'

@paint(component)
@schedule(require)
class Lazy {
  #channel
  #component
  #props
  #require
  #slot
  
  get channel () {
    return this.#channel ??= Math.random()
  }
  
  get component () {
    return this.#component
  }
  
  get props () {
    return this.#props
  }

  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#props = props
    this.#require = props.require
    this.#slot = props.slot

    delete this.#props.require
  }

  @repaint
  render (component) {
    this.#component = component
    return this
  }

  require () {
    return this.#require()
  }
}

export default Lazy
