import { paint, repaint } from '@h'
import component, { audio } from './component'

@paint(component)
class Clap {
  get key () {
    return 'A'
  }

  get sound () {
    return 'clap'
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

export default Clap
