import { paint, repaint } from '@h'
import Part from './Part'
import drumstick from './drumstick'
import component from './component'
import file from './sounds/snare.wav'

@paint(component)
class Snare extends Part {
  get key () {
    return 'J'
  }

  get sound () {
    return 'Snare'
  }

  constructor () {
    super(file)
    drumstick(74, this)
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

export default Snare
