import { paint, repaint } from '@h'
import component, { audio } from './component'

@paint(component)
class Snare {
  get key () {
    return 'J'
  }

  get sound () {
    return 'Snare'
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

export default Snare
