import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import * as mapper from './mapper'

@paint(component)
class Origem {
  #selected
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

  constructor (valor) {
    this.#valor = valor
  }

  @repaint
  toggle () {
    this.#selected = f.not(this.selected)
    return this
  }

  static create (valor) {
    return new Origem(valor)
  }
}

export default Origem
