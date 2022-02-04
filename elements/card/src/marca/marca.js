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

  static create (shape) {
    return new Marca(
      shape.marca?.nome,
      shape.marca?.slug
    )
  }

  static stub () {
    return new Marca()
  }
}

export default Marca
