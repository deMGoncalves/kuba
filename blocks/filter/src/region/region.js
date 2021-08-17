import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import component from './component'
import Option from './option'
import schema from './schema.json'

@paint(component)
class Region {
  #filter
  #opened
  #options
  #value = new Set()

  get display () {
    return this.#value.size
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  get options () {
    return this.#options
  }

  get selected () {
    return f.truthy(this.#value.size)
  }

  get value () {
    return f.map([...this.#value], (option) => option.value)
  }

  constructor (options, filter) {
    this.#filter = filter
    this.#options = f.map(options, Option.create(this))
  }

  @repaint
  close () {
    this.#opened = f.F()
    echo.emit('overlayer:close')
    return this
  }

  @repaint
  open () {
    this.#opened = f.T()
    echo.emit('overlayer:open')
    return this
  }

  @repaint
  select (option) {
    this.#value.add(option)
    this.#filter.refine({
      key: 'region',
      value: this.value
    })
    return this
  }

  @repaint
  unselect (option) {
    this.#value.delete(option)
    this.#filter.refine({
      key: 'region',
      value: this.value
    })
    return this
  }

  static create (filter) {
    return new Region(schema.options, filter)
  }
}

export default Region
