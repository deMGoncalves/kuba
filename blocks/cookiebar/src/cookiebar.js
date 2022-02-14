import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Cookiebar {
  #step

  get step () {
    return this.#step
  }
}

export default Cookiebar
