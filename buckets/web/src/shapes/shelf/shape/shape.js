import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import { redirectTo } from '@kuba/router'
import Comparar from './comparar'
import Modelo from './modelo'
import Tamanho from './tamanho'
import component from './component'
import data from './data'
import Stub from './stub'

@paint(component)
@jsonld(data)
class Shape {
  #comparar
  #descricao
  #marca
  #modelo
  #slug
  #tamanho
  #thumbnail

  get comparar () {
    return this.#comparar ??= Comparar.create()
  }

  get descricao () {
    return this.#descricao ??= ''
  }

  get marca () {
    return this.#marca ??= {}
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

  constructor (descricao, marca, modelo, slug, tamanho, thumbnail) {
    this.#descricao = descricao
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
      data.marca,
      Modelo.create(data.modelo),
      data.slug,
      Tamanho.create(data.tamanho),
      data.thumbnail
    )
  }

  static stub () {
    return Stub.create()
  }
}

export default Shape
