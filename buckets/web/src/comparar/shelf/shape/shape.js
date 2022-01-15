import { paint } from '@kuba/h'
import Compare from '@kuba/compare'
import jsonld from '@kuba/jsonld'
import Modelo from './modelo'
import Tamanho from './tamanho'
import component from './component'
import data from './data'
import Ficha from './ficha'

@paint(component)
@jsonld(data)
class Shape {
  #descricao
  #ficha
  #id
  #marca
  #modelo
  #slug
  #tamanho
  #thumbnail

  get descricao () {
    return this.#descricao ??= ''
  }

  get ficha () {
    return this.#ficha ??= ''
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

  constructor (descricao, ficha, id, marca, modelo, slug, tamanho, thumbnail) {
    this.#descricao = descricao
    this.#ficha = ficha
    this.#id = id
    this.#marca = marca
    this.#modelo = modelo
    this.#slug = slug
    this.#tamanho = tamanho
    this.#thumbnail = thumbnail
  }

  remove () {
    Compare.remove({ id: this.#id })
    return this
  }

  static create (data) {
    return new Shape(
      data.descricao,
      Ficha.create(data),
      data.id,
      data.marca,
      Modelo.create(data.modelo),
      data.slug,
      Tamanho.create(data.tamanho),
      data.thumbnail
    )
  }
}

export default Shape
