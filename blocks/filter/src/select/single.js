import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import Option from './option'

@paint(component)
class Single {
  #filter
  #key
  #label
  #opened
  #options
  #option

  get key () {
    return this.#key
  }

  get label () {
    return this.#label
  }

  get length () {
    return this.value ? 1 : 0
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  get options () {
    return this.#options ??= []
  }

  get value () {
    return this.#option.checked
      ? this.#option.key
      : null
  }

  constructor (key, label, options, filter) {
    this.#filter = filter
    this.#key = key
    this.#label = label
    this.#option = Option.stub()
    this.#options = f.map(options, Option.create(this))
  }

  @repaint
  close () {
    this.#opened = f.F()
    this.#filter.change(this)
    return this
  }

  change (option) {
    this.#option.unselect()
    this.#option = option
    return this
  }

  @repaint
  open () {
    this.#opened = f.T()
    return this
  }

  @repaint
  rewind () {
    this.change(Option.stub())
    return this
  }

  static create (descriptor, filter) {
    return new Single(
      descriptor.key,
      descriptor.value,
      descriptor.options,
      filter
    )
  }
}

export default Single
