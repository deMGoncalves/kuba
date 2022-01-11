import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Material {
  #valor

  get valor () {
    return this.#valor
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create () {
    return new Material(global.material)
  }
}

export default Material
