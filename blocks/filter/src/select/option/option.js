import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Option {
  #checked
  #key
  #select
  #value
  #multiselect

  get checked () {
    return this.#checked ??= f.F()
  }

  get key () {
    return this.#key
  }

  get multiselect () {
    return this.#multiselect ??= f.F()
  }

  get value () {
    return this.#value
  }

  constructor (key, value, select, multiselect) {
    this.#key = key
    this.#select = select
    this.#value = value
    this.#multiselect = multiselect
  }

  @repaint
  toggle () {
    const checked = f.not(this.checked)
    this.#select.change(this)
    this.#checked = checked
    return this
  }

  @repaint
  unselect () {
    this.#checked = f.F()
    return this
  }

  static create (select, multiselect) {
    return (descriptor) =>
      new Option(
        descriptor.key,
        descriptor.value,
        select,
        multiselect
      )
  }

  static stub () {
    return new Option(undefined, undefined)
  }
}

export default Option
