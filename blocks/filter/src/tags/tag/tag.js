import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import component from './component'

@paint(component)
class Tag {
  #key
  #value

  get value () {
    return f.equal(this.#key, 'tamanho')
      ? `${this.#value}"`
      : this.#value
  }

  constructor (key, value) {
    this.#key = key
    this.#value = value
  }

  remove () {
    echo.emit(`${this.#key}:remove`, this.#value)
    return this
  }

  static create ([key, value]) {
    return new Tag(key, value)
  }
}

export default Tag
