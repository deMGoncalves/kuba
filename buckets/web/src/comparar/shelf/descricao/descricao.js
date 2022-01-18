import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Descricao {
  #valor

  get valor () {
    return this.#valor
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (data) {
    return new Descricao(data.descricao)
  }
}

export default Descricao
