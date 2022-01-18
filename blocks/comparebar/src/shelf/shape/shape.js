import { paint } from '@kuba/h'
import Compare from '@kuba/compare'
import component from './component'
import Laminas from './laminas'
import Modelo from './modelo'

@paint(component)
class Shape {
  #id
  #laminas
  #marca
  #modelo
  #thumbnail

  get laminas () {
    return this.#laminas
  }

  get marca () {
    return this.#marca
  }

  get modelo () {
    return this.#modelo
  }

  get thumbnail () {
    return this.#thumbnail
  }

  constructor (id, laminas, marca, modelo, thumbnail) {
    this.#id = id
    this.#laminas = laminas
    this.#marca = marca
    this.#modelo = modelo
    this.#thumbnail = thumbnail
  }

  remove () {
    Compare.remove({ id: this.#id })
    return this
  }

  static create (data) {
    return new Shape(
      data.id,
      Laminas.create(data.laminas),
      data.marca,
      Modelo.create(data.modelo),
      data.thumbnail
    )
  }
}

export default Shape
