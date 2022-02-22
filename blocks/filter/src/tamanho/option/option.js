import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import events from './events'

@paint(component)
@events
class Option {
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
    this.#target[Option.onChange]()
    return this
  }

  @repaint
  [events.onRemove] () {
    this.#selected = f.F()
    this.#target[Option.onChange]()
    return this
  }

  static create (target) {
    return (valor) => new Option(valor, target)
  }
}

export default Option
