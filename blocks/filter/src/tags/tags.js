import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Option from './option'
import component from './component'
import schema from './schema.json'

@paint(component)
class Tags {
  #filter
  #options
  #selected

  get options () {
    return this.#options
  }

  get value () {
    return this.#selected.value
  }

  constructor (options, filter) {
    this.#filter = filter
    this.#options = f.map(options, Option.create(this))
    this.#selected = Option.stub(this)
  }

  select (option) {
    this.#selected.unselect()
    this.#selected = option
    this.#filter.refine({
      key: 'tag',
      value: this.value
    })
    return this
  }

  unselect () {
    this.#selected = Option.stub(this)
    this.#filter.refine({
      key: 'tag',
      value: this.value
    })
    return this
  }

  static create (filter) {
    return new Tags(
      schema.options,
      filter
    )
  }
}

export default Tags
