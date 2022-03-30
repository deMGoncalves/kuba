import * as f from '@kuba/f'

class Topping {
  #selected

  get nome () {
    return ''
  }

  get selected () {
    return this.#selected ??= f.F()
  }

  toggle () {
    this.#selected = f.not(this.selected)
    return this
  }
}

export default Topping
