import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Thumbnail {
  #alt
  #src

  get alt () {
    return this.#alt
  }

  get src () {
    return this.#src
  }

  constructor (alt, src) {
    this.#alt = alt
    this.#src = src
  }

  static create () {
    return new Thumbnail(
      global.modelo,
      global.thumbnail
    )
  }
}

export default Thumbnail
