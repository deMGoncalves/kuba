import { paint, repaint } from '@h'
import Part from './Part'
import drumstick from './drumstick'
import component from './component'
import file from './sounds/tink.wav'

@paint(component)
class Tink extends Part {
  get key () {
    return 'L'
  }

  get sound () {
    return 'Tink'
  }

  constructor () {
    super(file)
    drumstick(76, this)
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

export default Tink
