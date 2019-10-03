import { paint, repaint } from '@h'
import Part from './Part'
import drumstick from './drumstick'
import component from './component'
import file from './sounds/openhat.wav'

@paint(component)
class OpenHat extends Part {
  get key () {
    return 'F'
  }

  get sound () {
    return 'OpenHat'
  }

  constructor () {
    super(file)
    drumstick(70, this)
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

export default OpenHat
