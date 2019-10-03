import { paint, repaint } from '@h'
import component, { audio } from './component'

@paint(component)
class OpenHat {
  get key () {
    return 'F'
  }

  get sound () {
    return 'OpenHat'
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

export default OpenHat
