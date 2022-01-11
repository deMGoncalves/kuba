import { paint } from '@kuba/h'
import global from '@kuba/global'
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

  static create () {
    return new Marca(global.marca.nome)
  }
}

export default Marca
