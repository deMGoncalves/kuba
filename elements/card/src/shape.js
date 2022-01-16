import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import { redirectTo } from '@kuba/router'
import component from './component'
import data from './data'
import Laminas from './laminas'
import Marca from './marca'
import Modelo from './modelo'
import Tamanho from './tamanho'
import Stub from './stub'

@paint(component)
@jsonld(data)
class Shape {
  #descricao
  #laminas
  #marca
  #modelo
  #slug
  #tamanho
  #thumbnail

  get descricao () {
    return this.#descricao ??= ''
  }

  get laminas () {
    return this.#laminas ??= ''
  }

  get marca () {
    return this.#marca ??= ''
  }

  get modelo () {
    return this.#modelo ??= ''
  }

  get slug () {
    return this.#slug ??= ''
  }

  get tamanho () {
    return this.#tamanho ??= ''
  }

  get thumbnail () {
    return this.#thumbnail ??= ''
  }

  constructor (descricao, laminas, marca, modelo, slug, tamanho, thumbnail) {
    this.#descricao = descricao
    this.#laminas = laminas
    this.#marca = marca
    this.#modelo = modelo
    this.#slug = slug
    this.#tamanho = tamanho
    this.#thumbnail = thumbnail
  }

  redirect () {
    redirectTo('shape', { marca: this.#marca.slug, shape: this.slug })
    return this
  }

  static create (data) {
    return new Shape(
      data.descricao,
      Laminas.create(data.laminas),
      Marca.create(data.marca),
      Modelo.create(data.modelo),
      data.slug,
      Tamanho.create(data.tamanho),
      data.thumbnail
    )
  }

  static stub () {
    return new Stub()
  }
}

export default Shape
