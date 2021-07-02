import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import schedule from '@kuba/schedule'
import component from './component'
import scroll from './scroll'

@paint(component)
@schedule(scroll)
class Zone {
  #className
  #onScreen
  #slot

  get className () {
    return this.#className
  }

  get onScreen () {
    return this.#onScreen ??= f.F()
  }

  get slot () {
    return this.#slot
  }

  constructor (props) {
    this.#className = props.className
    this.#slot = props.slot
  }

  @repaint
  render () {
    this.#onScreen = f.T()
    return this
  }
}

export default Zone
