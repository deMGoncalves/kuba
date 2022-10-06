import * as f from '@kuba/f'
import { filter } from '@kuba/marionette'
import { actions, Option as Base } from '@kuba/filter/src/select'
import { paint, repaint } from '@kuba/h'
import component from './component'

@paint(component)
@actions
class Option {
  #base

  @filter.isTruthy
  get selected () {
    return this.#base.selected
  }

  get valor () {
    return this.#base.valor
  }

  static get onChange () {
    return Base.onChange
  }

  constructor (valor, target) {
    this.#base = Base.create(target)(valor)
  }

  @repaint
  toggle () {
    this.#base.toggle()
    return this
  }

  [actions.key] () {
    return this.#base[actions.key]()
  }

  @repaint
  [actions.onRemove] () {
    this.#base[actions.onRemove]()
    return this
  }

  [f.dunder.equal] () {
    return this.valor
  }

  static create (target) {
    return (valor) => new Option(valor, target)
  }
}

export default Option
