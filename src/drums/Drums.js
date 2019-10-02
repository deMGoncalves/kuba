import { paint } from '@h'
import component, { rack } from './component'

@paint(component)
class Drums {
  constructor () {
    this[rack] = []
    return this
  }
}

export default Drums
