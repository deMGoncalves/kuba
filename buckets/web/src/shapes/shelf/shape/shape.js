import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import { redirectTo } from '@kuba/router'
import Modelo from './modelo'
import Tamanho from './tamanho'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
class Shape {
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
    return this.#modelo ??= ''
  }

  get tamanho () {
    return this.#tamanho ??= ''
  }

  get thumbnail () {
    return this.#thumbnail ??= ''
  }

  constructor (descricao, modelo, marca, slug, tamanho, thumbnail) {
    this.#descricao = descricao
    this.#marca = marca
    this.#modelo = modelo
    this.#slug = slug
    this.#tamanho = tamanho
    this.#thumbnail = thumbnail
  }

  redirect () {
    redirectTo('shape', { marca: this.#marca.slug, shape: this.#slug })
    return this
  }

  static create (data) {
    return new Shape(
      data.descricao,
      Modelo.create(data.modelo),
      data.marca,
      data.slug,
      Tamanho.create(data.tamanho),
      data.thumbnail
    )
  }

  static stub () {
    return new Shape(
      undefined,
      Modelo.stub(),
      undefined,
      undefined,
      Tamanho.stub(),
      undefined
    )
  }
}

export default Shape
