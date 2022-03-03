import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import component from './component'

@paint(component)
class Marca {
  #position
  #valor

  get position () {
    return this.#position
  }

  get valor () {
    return this.#valor ??= Shape[this.position]?.marca?.nome
  }

  constructor (props) {
    this.#position = props.slave ? 'slave' : 'master'
  }
}

export default Marca
