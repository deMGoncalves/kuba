import { paint, repaint } from '@h'
import component, { audio } from './component'

@paint(component)
class Ride {
  get key () {
    return 'H'
  }

  get sound () {
    return 'Ride'
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

export default Ride
