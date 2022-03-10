import { paint, repaint } from '@kuba/h'
import component from './component'
import connect from './connect'

@paint(component)
@connect
class Sandbox {
  #component
  #require

  get component () {
    return this.#component
  }

  constructor (props) {
    this.#require = props.require
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

export default Sandbox
