import { paint, repaint } from '@h'
import component, { audio } from './component'

@paint(component)
class HiHat {
  get key () {
    return 'S'
  }

  get sound () {
    return 'hihat'
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

export default HiHat
