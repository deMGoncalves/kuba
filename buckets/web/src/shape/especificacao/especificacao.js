import { paint } from '@kuba/h'
import component from './component'
import Concave from './concave'
import Lixa from './lixa'
import Nose from './nose'
import Tamanho from './tamanho'
import Tail from './tail'
import Wheelbase from './wheelbase'

@paint(component)
class Especificacao {
  #concave
  #lixa
  #nose
  #tail
  #tamanho
  #wheelbase

  get concave () {
    return this.#concave ??= Concave.create()
  }

  get lixa () {
    return this.#lixa ??= Lixa.create()
  }

  get nose () {
    return this.#nose ??= Nose.create()
  }

  get tail () {
    return this.#tail ??= Tail.create()
  }

  get tamanho () {
    return this.#tamanho ??= Tamanho.create()
  }

  get wheelbase () {
    return this.#wheelbase = Wheelbase.create()
  }

  static create () {
    return new Especificacao()
  }
}

export default Especificacao
