import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import schedules from './schedules'

@paint(component)
@schedules
class Zone {
  #className
  #offScreen
  #slot

  get className () {
    return this.#className
  }

  get offScreen () {
    return this.#offScreen
  }

  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#className = props.className
    this.#slot = props.slot
    this.#offScreen = f.T()
  }

  @repaint
  render () {
    this.#offScreen = f.F()
    return this
  }
}

export default Zone
