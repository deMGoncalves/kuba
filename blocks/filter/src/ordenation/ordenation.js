import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import Option from './option'
import component from './component'
import schema from './schema.json'

@paint(component)
class Ordenation {
  #filter
  #opened
  #options
  #selected

  get display () {
    return f.or(this.#selected.display, 'Ordenar por')
  }

  get opened () {
    return this.#opened ??= f.F()
  }

  get options () {
    return this.#options
  }

  get selected () {
    return f.truthy(this.#selected.value)
  }

  get value () {
    return this.#selected.value
  }

  constructor (options, filter) {
    this.#filter = filter
    this.#options = f.map(options, Option.create(this))
    this.#selected = Option.stub(this)
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
    this.#selected.unselect()
    this.#selected = option
    this.#filter.refine({
      key: 'ordenation',
      value: this.value
    })
    return this
  }

  @repaint
  unselect () {
    this.#selected = Option.stub(this)
    this.#filter.refine({
      key: 'ordenation',
      value: this.value
    })
    return this
  }

  static create (filter) {
    return new Ordenation(schema.options, filter)
  }
}

export default Ordenation
