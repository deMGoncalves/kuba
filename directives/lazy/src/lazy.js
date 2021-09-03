import { paint, repaint } from '@kuba/h'
import component from './component'
import connected from './connected'

@paint(component)
@connected
class Lazy {
  #channel
  #component
  #require

  get channel () {
    return this.#channel ??= Math.random()
  }

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

export default Lazy
