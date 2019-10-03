import { paint, repaint } from '@h'
import Part from './Part'
import drumstick from './drumstick'
import component from './component'
import file from './sounds/clap.wav'

@paint(component)
class Clap extends Part {
  get key () {
    return 'A'
  }

  get sound () {
    return 'clap'
  }

  constructor () {
    super(file)
    drumstick(65, this)
    return this
  }

  @repaint
  play () {
    super.play()
    return this
  }

  @repaint
  stop () {
    super.stop()
    return this
  }
}

export default Clap
