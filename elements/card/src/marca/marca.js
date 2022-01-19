import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Marca {
  #nome
  #slug

  get nome () {
    return this.#nome ??= ''
  }

  get slug () {
    return this.#slug ??= ''
  }

  constructor (nome, slug) {
    this.#nome = nome
    this.#slug = slug
  }

  static create (data) {
    return new Marca(
      data.marca?.nome,
      data.marca?.slug
    )
  }

  static stub () {
    return new Marca()
  }
}

export default Marca
