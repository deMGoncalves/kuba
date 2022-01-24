import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Thumbnail {
  #alt
  #desc
  #marca
  #src

  get alt () {
    return this.#alt
  }

  get desc () {
    return this.#desc
  }

  get marca () {
    return this.#marca
  }

  get src () {
    return this.#src
  }

  constructor (alt, desc, marca, src) {
    this.#alt = alt
    this.#desc = desc
    this.#marca = marca
    this.#src = src
  }

  static create (data) {
    return new Thumbnail(
      data.modelo,
      data.descricao,
      data.marca.nome,
      data.thumbnail
    )
  }
}

export default Thumbnail
