import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import { redirectTo } from '@kuba/router'
import component from './component'
import data from './data'
import Stub from './stub'

@paint(component)
@jsonld(data)
class Marca {
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

  constructor (descricao, logo, nome, slug) {
    this.#descricao
    this.#logo = logo
    this.#nome = nome
    this.#slug = slug
  }

  redirect () {
    redirectTo('marca', { marca: this.slug })
    return this
  }

  static create (data) {
    return new Marca(
      data.descricao,
      data.logo,
      data.nome,
      data.slug
    )
  }

  static stub () {
    return Stub.create()
  }
}

export default Marca
