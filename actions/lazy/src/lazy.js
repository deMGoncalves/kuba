import { paint, repaint } from '@kuba/h'
import schedule from '@kuba/schedule'
import component from './component'
import require from './require'

@paint(component)
@schedule(require)
class Lazy {
  #channel
  #component
  #from
  #props
  
  get channel () {
    return this.#channel ??= Math.random()
  }
  
  get component () {
    return this.#component
  }

  get from () {
    return this.#from
  }

  get props () {
    return this.#props
  }

  constructor (props) {
    this.#from = props.from
    this.#props = props
    delete this.#props.from
  }

  @repaint
  render (component) {
    this.#component = component
    return this
  }
}

export default Lazy
