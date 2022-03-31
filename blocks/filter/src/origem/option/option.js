import * as f from '@kuba/f'
import * as mapper from './mapper'
import { actions } from '@kuba/filter/src/select'
import { paint, repaint } from '@kuba/h'
import component from './component'

@paint(component)
@actions
class Option {
  #selected
  #target
  #valor

  get key () {
    return this.#target.key
  }

  get selected () {
    return this.#selected ??= f.F()
  }

  get url () {
    return mapper[this.valor]
  }

  get valor () {
    return this.#valor ??= ''
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
    this.#target[Option.onChange]()
    return this
  }

  @repaint
  [actions.onRemove] () {
    this.#selected = f.F()
    this.#target[Option.onChange]()
    return this
  }

  static create (target) {
    return (valor) => new Option(valor, target)
  }
}

export default Option
