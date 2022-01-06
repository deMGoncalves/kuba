import { paint } from '@kuba/h'
import { redirectTo } from '@kuba/router'
import Modelo from './modelo'
import Tamanho from './tamanho'
import component from './component'

@paint(component)
class Shape {
  #marca
  #modelo
  #slug
  #tamanho
  #thumbnail

  get modelo () {
    return this.#modelo
  }

  get tamanho () {
    return this.#tamanho
  }

  get thumbnail () {
    return this.#thumbnail
  }

  constructor (modelo, tamanho, marca, slug, thumbnail) {
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
      Modelo.create(data.modelo),
      Tamanho.create(data.tamanho),
      data.marca,
      data.slug,
      data.thumbnail
    )
  }

  static stub () {
    return new Shape(
      Modelo.stub(),
      Tamanho.stub(),
      undefined
    )
  }
}

export default Shape
