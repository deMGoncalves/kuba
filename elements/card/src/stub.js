import { paint } from '@kuba/h'
import component from './component'
import Laminas from './laminas'
import Marca from './marca'
import Modelo from './modelo'

@paint(component)
class Stub {
  #descricao
  #laminas
  #marca
  #modelo
  #slug
  #thumbnail

  get descricao () {
    return this.#descricao ??= ''
  }

  get laminas () {
    return this.#laminas ??= Laminas.stub()
  }

  get marca () {
    return this.#marca ??= Marca.stub()
  }

  get modelo () {
    return this.#modelo ??= Modelo.stub()
  }

  get slug () {
    return this.#slug ??= ''
  }

  get thumbnail () {
    return this.#thumbnail ??= ''
  }

  redirect () {
    return this
  }

  static stub () {
    return new Stub()
  }
}

export default Stub
