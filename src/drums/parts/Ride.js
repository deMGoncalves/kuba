import { paint, repaint } from '@h'
import Part from './Part'
import drumstick from './drumstick'
import component from './component'
import file from './sounds/ride.wav'

@paint(component)
class Ride extends Part {
  get key () {
    return 'H'
  }

  get sound () {
    return 'Ride'
  }

  constructor () {
    super(file)
    drumstick(72, this)
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

export default Ride
