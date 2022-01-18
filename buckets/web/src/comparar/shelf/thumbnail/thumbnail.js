import { paint } from '@kuba/h'
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

  static create (data) {
    return new Thumbnail(
      data.modelo,
      data.thumbnail
    )
  }
}

export default Thumbnail
