import * as f from '@kuba/f'
import { filter } from '@kuba/marionette'

class Topping {
  #selected

  get nome () {
    return ''
  }

  @filter.isTruthy
  get selected () {
    return this.#selected ??= f.F()
  }

  toggle () {
    this.#selected = f.not(this.selected)
    return this
  }
}

export default Topping
