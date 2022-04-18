import { paint } from '@kuba/h'
import { redirectTo } from '@kuba/router'
import component from './component'
import Marca from './marca'
import Modelo from './modelo'
import Pro from './pro'
import Stub from './stub'
import Tamanho from './tamanho'

@paint(component)
class Shape {
  #marca
  #modelo
  #pro
  #slug
  #tamanho
  #thumbnail

  get marca () {
    return this.#marca
  }

  get modelo () {
    return this.#modelo
  }

  get pro () {
    return this.#pro
  }

  get tamanho () {
    return this.#tamanho
  }

  get thumbnail () {
    return `https://ik.imagekit.io/deMGoncalves/${this.#thumbnail}?tr=w-226.75,h-283.433`
  }

  constructor (marca, modelo, pro, slug, tamanho, thumbnail) {
    this.#marca = marca
    this.#modelo = modelo
    this.#pro = pro
    this.#slug = slug
    this.#tamanho = tamanho
    this.#thumbnail = thumbnail
  }

  redirect () {
    redirectTo('shape', { marca: this.marca.slug, shape: this.#slug })
    return this
  }

  static create (shape) {
    return new Shape(
      Marca.create(shape),
      Modelo.create(shape),
      Pro.create(shape),
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
