import { paint } from '@kuba/h'
import { redirectTo } from '@kuba/router'
import component from './component'

@paint(component)
class Marca {
  #nome
  #slug
  #thumbnail

  get nome () {
    return this.#nome ??= ''
  }

  get thumbnail () {
    return this.#thumbnail
  }

  constructor (nome, slug, thumbnail) {
    this.#nome = nome
    this.#slug = slug
    this.#thumbnail = thumbnail
  }

  redirect () {
    redirectTo('marca', { marca: this.#slug })
    return this
  }

  static create (data) {
    return new Marca(
      data.nome,
      data.slug,
      data.logo
    )
  }

  static stub () {
    return new Marca()
  }
}

export default Marca
