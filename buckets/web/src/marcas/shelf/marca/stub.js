import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Stub {
  #descricao
  #logo
  #nome
  #slug

  get descricao () {
    return this.#descricao ??= ''
  }

  get logo () {
    return this.#logo ??= ''
  }

  get nome () {
    return this.#nome ??= ''
  }

  get slug () {
    return this.#slug ??= ''
  }

  static create () {
    return new Stub()
  }
}

export default Stub
