import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Option {
  #display
  #icon
  #selected
  #ordenation
  #value

  get display () {
    return this.#display
  }

  get icon () {
    return this.#icon
  }

  get selected () {
    return this.#selected ??= f.F()
  }

  get value () {
    return this.#value
  }

  constructor (display, icon, value, ordenation) {
    this.#display = display
    this.#icon = icon
    this.#ordenation = ordenation
    this.#value = value
  }

  @repaint
  select () {
    this.#selected = f.T()
    this.#ordenation.select(this)
    return this
  }

  @repaint
  unselect () {
    this.#selected = f.F()
    this.#ordenation.unselect()
    return this
  }

  static create (ordenation) {
    return (descriptor) =>
      new Option(
        descriptor.display,
        descriptor.icon,
        descriptor.value,
        ordenation
      )
  }

  static stub (ordenation) {
    return new Option('', '', 0, ordenation)
  }
}

export default Option
