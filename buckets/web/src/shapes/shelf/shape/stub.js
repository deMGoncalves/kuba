import { paint } from '@kuba/h'
import component from './component'
import Modelo from './modelo'
import Tamanho from './tamanho'

@paint(component)
class Stub {
  #descricao
  #marca
  #modelo
  #slug
  #tamanho
  #thumbnail

  get descricao () {
    return this.#descricao ??= ''
  }

  get marca () {
    return this.#marca ??= {}
  }

  get modelo () {
    return this.#modelo ??= Modelo.stub()
  }

  get slug () {
    return this.#slug ??= ''
  }

  get tamanho () {
    return this.#tamanho ??= Tamanho.stub()
  }

  get thumbnail () {
    return this.#thumbnail ??= ''
  }

  redirect () {
    return this
  }

  static create () {
    return new Stub()
  }
}

export default Stub
