import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import Option from './option'

@paint(component)
class Multi {
  #filter
  #key
  #label
  #opened
  #options

  get key () {
    return this.#key
  }

  get label () {
    return this.#label
  }

  get length () {
    return f.len(this.value)
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  get options () {
    return this.#options ??= []
  }

  get value () {
    return f
      .from(this.#options)
      .pipe(f.filter(f.__, f.prop('checked')))
      .pipe(f.map(f.__, f.prop('key')))
      .done()
  }

  constructor (key, label, multiselect, options, filter) {
    this.#filter = filter
    this.#key = key
    this.#label = label
    this.#options = f.map(options, Option.create(this, multiselect))
  }

  @repaint
  close () {
    this.#opened = f.F()
    this.#filter.change(this)
    return this
  }

  change () {
    return this
  }

  @repaint
  open () {
    this.#opened = f.T()
    return this
  }

  @repaint
  rewind () {
    f.forEach(this.#options, (option) => option.unselect())
    return this
  }

  static create (descriptor, filter) {
    return new Multi(
      descriptor.key,
      descriptor.value,
      descriptor.multiselect,
      descriptor.options,
      filter
    )
  }
}

export default Multi
