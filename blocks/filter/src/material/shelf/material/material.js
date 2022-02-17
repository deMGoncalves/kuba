import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Material {
  #selected
  #target
  #valor

  get selected () {
    return this.#selected ??= f.F()
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
    this.#target[Material.onChange]()
    return this
  }

  static create (target) {
    return (valor) => new Material(valor, target)
  }
}

export default Material
