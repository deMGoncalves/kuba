import { paint } from '@h'
import { Boom, Clap, HiHat, Kick, OpenHat, Ride, Snare, Tink, Tom } from './parts'
import component, { rack } from './component'

@paint(component)
class Drums {
  constructor () {
    this[rack] = [
      new Clap(),
      new HiHat(),
      new Kick(),
      new OpenHat(),
      new Boom(),
      new Ride(),
      new Snare(),
      new Tom(),
      new Tink()
    ]
    return this
  }
}

export default Drums
