import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Marca {
  #logo
  #nome

  get logo () {
    return this.#logo
  }

  get nome () {
    return this.#nome ??= ''
  }

  constructor (nome, logo) {
    this.#logo = logo
    this.#nome = nome
  }

  static create (data) {
    return new Marca(
      data.nome,
      data.logo
    )
  }

  static stub () {
    return new Marca()
  }
}

export default Marca
