import { paint, repaint } from '@h'
import Part from './Part'
import drumstick from './drumstick'
import component from './component'
import file from './sounds/kick.wav'

@paint(component)
class Kick extends Part {
  get key () {
    return 'D'
  }

  get sound () {
    return 'Kick'
  }

  constructor () {
    super(file)
    drumstick(68, this)
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

export default Kick
