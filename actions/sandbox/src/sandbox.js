import { paint, repaint } from '@kuba/h'
import component from './component'

@paint(component)
class Lazy {
  #component
  #slot
  #worker
  
  get component () {
    return this.#component
  }
  
  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#slot = props.slot

    this.#worker = props.connect()
    this.#worker.addEventListener('message', console.log)
  }

  @repaint
  render (component) {
    this.#component = component
    return this
  }
}

export default Lazy
