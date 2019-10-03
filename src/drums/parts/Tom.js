import { paint, repaint } from '@h'
import Part from './Part'
import drumstick from './drumstick'
import component from './component'
import file from './sounds/tom.wav'

@paint(component)
class Tom extends Part {
  get key () {
    return 'K'
  }

  get sound () {
    return 'Tom'
  }

  constructor () {
    super(file)
    drumstick(75, this)
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

export default Tom
