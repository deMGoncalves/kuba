import { paint } from '@kuba/h'
import echo from '@kuba/echo'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Comparar {
  #shape

  adicionar () {
    echo.emit('compare:add', this.#shape)
    return this
  }

  constructor (shape) {
    this.#shape = shape
  }

  static create () {
    return new Comparar(global)
  }
}

export default Comparar
