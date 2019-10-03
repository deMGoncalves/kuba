import { paint, repaint } from '@h'
import component, { audio } from './component'

@paint(component)
class Boom {
  get key () {
    return 'G'
  }

  get sound () {
    return 'Boom'
  }

  @repaint
  play () {
    this[audio] = 'playing'
    setTimeout(() => this.stop(), 100)
    return this
  }

  @repaint
  stop () {
    this[audio] = 'stopped'
    return this
  }
}

export default Boom
