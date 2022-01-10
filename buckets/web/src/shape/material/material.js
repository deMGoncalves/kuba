import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Material {
  #valor

  get valor () {
    return this.#valor
  }

  cosntructor (valor) {
    this.#valor = valor
  }

  static create () {
    return new Material(
      f.join(global.material, '')
    )
  }
}

export default Material
