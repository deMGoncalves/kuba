import { paint, repaint } from '@h'
import component, { audio } from './component'

@paint(component)
class Kick {
  get key () {
    return 'D'
  }

  get sound () {
    return 'Kick'
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

export default Kick
