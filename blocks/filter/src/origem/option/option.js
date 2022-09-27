import * as mapper from './mapper'
import { actions, Option as Base } from '@kuba/filter/src/select'
import { filter } from '@kuba/marionette'
import { paint, repaint } from '@kuba/h'
import component from './component'

@paint(component)
@actions
class Option {
  #base

  get key () {
    return this.#base.key
  }

  @filter.isTruthy
  get selected () {
    return this.#base.selected
  }

  get url () {
    return mapper[this.valor]
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

  @repaint
  [actions.onRemove] () {
    this.#base[actions.onRemove]()
    return this
  }

  static create (target) {
    return (valor) => new Option(valor, target)
  }
}

export default Option
