import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Option {
  #display
  #selected
  #tags
  #value

  get display () {
    return this.#display
  }

  get selected () {
    return this.#selected
  }

  get value () {
    return this.#value
  }

  constructor (display, value, tags) {
    this.#display = display
    this.#tags = tags
    this.#value = value
  }

  @repaint
  select () {
    this.#selected = f.T()
    this.#tags.select(this)
    return this
  }

  @repaint
  unselect () {
    this.#selected = f.F()
    this.#tags.unselect(this)
    return this
  }

  static create (tags) {
    return ({ display, value }) =>
      new Option(display, value, tags)
  }

  static stub (tags) {
    return new Option('', 0, tags)
  }
}

export default Option
