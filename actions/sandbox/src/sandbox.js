import { paint, repaint } from '@kuba/h'
import schedule from '@kuba/schedule'
import component from './component'
import connect from './connect'

@paint(component)
@schedule(connect)
class Lazy {
  #component
  #connect
  #props
  #slot

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
    this.#connect = props.connect
    this.#props = props
    this.#slot = props.slot

    delete this.#props.connect
  }

  connect () {
    return this.#connect()
  }

  @repaint
  render (component) {
    this.#component = component
    return this
  }
}

export default Lazy
