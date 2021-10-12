import { paint, repaint } from '@kuba/h'
import schedule from '@kuba/schedule'
import component from './component'
import connect from './connect'

@paint(component)
@schedule(connect)
class Sandbox {
  #component
  #connect

  get component () {
    return this.#component
  }

  constructor (props) {
    this.#connect = props.connect
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

export default Sandbox
