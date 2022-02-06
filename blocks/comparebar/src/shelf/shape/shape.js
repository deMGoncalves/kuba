import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import actions from './actions'
import component from './component'
import Marca from './marca'
import Modelo from './modelo'
import Tamanho from './tamanho'

@paint(component)
class Shape {
  #id
  #marca
  #modelo
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

  constructor (id, marca, modelo, tamanho, thumbnail) {
    this.#id = id
    this.#marca = marca
    this.#modelo = modelo
    this.#tamanho = tamanho
    this.#thumbnail = thumbnail
  }

  @actions.remove
  remove () {
    const shapes = f
      .from(localStorage.getItem('_kuba.compare'))
      .pipe(f.or(f.__, '[]'))
      .pipe(JSON.parse)
      .pipe(f.slice(f.__, -2))
      .pipe(f.filter(f.__, f.compose(f.different(this.#id), f.prop('id'))))
      .done()

    localStorage.setItem('_kuba.compare', JSON.stringify(shapes))
    return this
  }

  static create (shape) {
    return new Shape(
      shape.id,
      Marca.create(shape),
      Modelo.create(shape),
      Tamanho.create(shape),
      shape.thumbnail
    )
  }
}

export default Shape
