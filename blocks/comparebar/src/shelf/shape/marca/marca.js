import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Marca {
  #nome

  get nome () {
    return this.#nome
  }

  constructor (nome) {
    this.#nome = nome
  }

  static create (shape) {
    return new Marca(shape.marca?.nome)
  }
}

export default Marca
