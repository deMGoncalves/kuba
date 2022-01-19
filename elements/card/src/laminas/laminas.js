import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Laminas {
  #valor

  get valor () {
    return this.#valor ??= ''
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (data) {
    return new Laminas(data.laminas)
  }

  static stub () {
    return new Laminas()
  }
}

export default Laminas
