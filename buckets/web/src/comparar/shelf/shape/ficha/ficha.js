import { paint } from '@kuba/h'
import component from './component'
import Concave from './concave'
import Flag from './flag'
import Laminas from './laminas'
import Lixa from './lixa'
import Marca from './marca'
import Material from './material'
import Montagem from './montagem'
import Nose from './nose'
import Origem from './origem'
import Tail from './tail'
import Tamanho from './tamanho'
import Tipo from './tipo'
import Wheelbase from './wheelbase'

@paint(component)
class Ficha {
  #concave
  #flag
  #laminas
  #lixa
  #marca
  #material
  #montagem
  #nose
  #origem
  #tail
  #tamanho
  #tipo
  #wheelbase
  get concave () {
    return this.#concave ??= ''
  }

  get flag () {
    return this.#flag ??= ''
  }

  get laminas () {
    return this.#laminas ??= ''
  }

  get lixa () {
    return this.#lixa ??= ''
  }

  get marca () {
    return this.#marca ??= ''
  }

  get material () {
    return this.#material ??= ''
  }

  get montagem () {
    return this.#montagem ??= ''
  }

  get nose () {
    return this.#nose ??= ''
  }

  get origem () {
    return this.#origem ??= ''
  }

  get tail () {
    return this.#tail ??= ''
  }

  get tamanho () {
    return this.#tamanho ??= ''
  }

  get tipo () {
    return this.#tipo ??= ''
  }

  get wheelbase () {
    return this.#wheelbase ??= ''
  }

  constructor (concave, flag, laminas, lixa, marca, material, montagem, nose, origem, tail, tamanho, tipo, wheelbase) {
    this.#concave = concave
    this.#flag = flag
    this.#laminas = laminas
    this.#lixa = lixa
    this.#marca = marca
    this.#material = material
    this.#montagem = montagem
    this.#nose = nose
    this.#origem = origem
    this.#tail = tail
    this.#tamanho = tamanho
    this.#tipo = tipo
    this.#wheelbase = wheelbase
  }

  static create (data) {
    return new Ficha(
      Concave.create(data?.concave),
      Flag.create(data?.flag),
      Laminas.create(data?.laminas),
      Lixa.create(data?.lixa),
      Marca.create(data?.marca?.nome),
      Material.create(data?.material),
      Montagem.create(data?.montagem),
      Nose.create(data?.nose),
      Origem.create(data?.marca?.origem?.valor),
      Tail.create(data?.tail),
      Tamanho.create(data?.tamanho),
      Tipo.create(data?.tipo),
      Wheelbase.create(data?.wheelbase)
    )
  }
}

export default Ficha
