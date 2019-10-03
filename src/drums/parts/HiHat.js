import { paint, repaint } from '@h'
import Part from './Part'
import drumstick from './drumstick'
import component from './component'
import file from './sounds/hihat.wav'

@paint(component)
class HiHat extends Part {
  get key () {
    return 'S'
  }

  get sound () {
    return 'hihat'
  }

  constructor () {
    super(file)
    drumstick(83, this)
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

export default HiHat
