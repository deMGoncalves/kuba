import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Thumbnail {
  #alt
  #creditos
  #src

  get alt () {
    return this.#alt
  }

  get creditos () {
    return this.#creditos
  }

  get src () {
    return this.#src
  }

  constructor (alt, creditos, src) {
    this.#alt = alt
    this.#creditos = creditos
    this.#src = src
  }

  static create () {
    return new Thumbnail(
      global.modelo,
      global.marca?.nome,
      global.thumbnail
    )
  }
}

export default Thumbnail
