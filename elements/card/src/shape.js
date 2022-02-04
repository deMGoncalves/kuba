import { paint } from '@kuba/h'
import { redirectTo } from '@kuba/router'
import component from './component'
import Marca from './marca'
import Modelo from './modelo'
import setData from './setData'
import Stub from './stub'
import Tamanho from './tamanho'

@paint(component)
class Shape {
  #marca
  #modelo
  #slug
  #tamanho
  #thumbnail

  get marca () {
    return this.#marca
  }

  get modelo () {
    return this.#modelo
  }

  get tamanho () {
    return this.#tamanho
  }

  get thumbnail () {
    return this.#thumbnail
  }

  constructor (marca, modelo, slug, tamanho, thumbnail) {
    this.#marca = marca
    this.#modelo = modelo
    this.#slug = slug
    this.#tamanho = tamanho
    this.#thumbnail = thumbnail
  }

  redirect () {
    redirectTo('shape', { marca: this.marca.slug, shape: this.slug })
    return this
  }

  static create (shape) {
    setData(shape)
    return new Shape(
      Marca.create(shape),
      Modelo.create(shape),
      shape.slug,
      Tamanho.create(shape),
      shape.thumbnail
    )
  }

  static stub () {
    return new Stub()
  }
}

export default Shape
