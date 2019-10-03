import { paint, repaint } from '@h'
import component, { audio } from './component'

@paint(component)
class Tink {
  get key () {
    return 'L'
  }

  get sound () {
    return 'Tink'
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

export default Tink
