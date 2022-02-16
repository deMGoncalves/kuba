import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import * as mapper from './mapper'

@paint(component)
class Origem {
  #selected
  #target
  #valor

  get selected () {
    return this.#selected ??= f.F()
  }

  get url () {
    return mapper[this.valor]
  }

  get valor () {
    return this.#valor
  }

  static get onChange () {
    return f.dunder.onChange
  }

  constructor (valor, target) {
    this.#target = target
    this.#valor = valor
  }

  @repaint
  toggle () {
    this.#selected = f.not(this.selected)
    this.#target[Origem.onChange]()
    return this
  }

  static create (target) {
    return (valor) => new Origem(valor, target)
  }
}

export default Origem
