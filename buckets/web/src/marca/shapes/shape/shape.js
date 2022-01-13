import { paint } from '@kuba/h'
import { redirectTo } from '@kuba/router'
import component from './component'

@paint(component)
class Shape {
  #thumbnail
  #modelo
  #marca
  #slug

  get marca () {
    return this.#marca ??= ''
  }

  get modelo () {
    return this.#modelo ??= ''
  }

  get slug () {
    return this.#slug ??= ''
  }

  get thumbnail () {
    return this.#thumbnail ??= ''
  }

  constructor (modelo, thumbnail, marca, slug) {
    this.#modelo = modelo
    this.#thumbnail = thumbnail
    this.#marca = marca
    this.#slug = slug
  }

  redirect () {
    redirectTo('shape', { marca: this.marca, shape: this.slug })
    return this
  }

  static create (descriptor) {
    return new Shape(
      descriptor?.modelo,
      descriptor?.thumbnail,
      descriptor?.marca?.slug,
      descriptor?.slug
    )
  }

  static stub () {
    return new Shape()
  }
}

export default Shape
