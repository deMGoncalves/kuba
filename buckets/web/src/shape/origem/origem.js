import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'
import * as mapper from './mapper'

@paint(component)
class Origem {
  #valor

  get url () {
    return mapper[this.valor]
  }

  get valor () {
    return this.#valor
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create () {
    return new Origem(global.marca?.origem?.valor)
  }
}

export default Origem
