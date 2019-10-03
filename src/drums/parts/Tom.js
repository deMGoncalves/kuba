import { paint, repaint } from '@h'
import component, { audio } from './component'

@paint(component)
class Tom {
  get key () {
    return 'K'
  }

  get sound () {
    return 'Tom'
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

export default Tom
