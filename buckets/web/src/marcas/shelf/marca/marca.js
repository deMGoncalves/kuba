import { paint } from '@kuba/h'
import { redirectTo } from '@kuba/router'
import component from './component'

@paint(component)
class Marca {
  #logo
  #nome
  #slug

  get logo () {
    return this.#logo
  }

  get nome () {
    return this.#nome ??= ''
  }

  constructor (nome, logo, slug) {
    this.#logo = logo
    this.#nome = nome
    this.#slug = slug
  }

  redirect () {
    redirectTo('marca', { marca: this.#slug })
    return this
  }

  static create (data) {
    return new Marca(
      data.nome,
      data.logo,
      data.slug
    )
  }

  static stub () {
    return new Marca()
  }
}

export default Marca
