import { paint } from '@kuba/h'
import component from './component'
import Marca from './marca'
import Modelo from './modelo'
import Tamanho from './tamanho'

@paint(component)
class Stub {
  #marca
  #modelo
  #tamanho
  #thumbnail

  get marca () {
    return this.#marca ??= Marca.stub()
  }

  get modelo () {
    return this.#modelo ??= Modelo.stub()
  }

  get tamanho () {
    return this.#tamanho ??= Tamanho.stub()
  }

  get thumbnail () {
    return this.#thumbnail
  }

  redirect () {
    return this
  }

  static stub () {
    return new Stub()
  }
}

export default Stub
