import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import actions from './actions'
import component from './component'
import Laminas from './laminas'
import Modelo from './modelo'

@paint(component)
class Shape {
  #id
  #laminas
  #modelo
  #thumbnail

  get laminas () {
    return this.#laminas
  }

  get modelo () {
    return this.#modelo
  }

  get thumbnail () {
    return this.#thumbnail
  }

  constructor (id, laminas, modelo, thumbnail) {
    this.#id = id
    this.#laminas = laminas
    this.#modelo = modelo
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

  static create (data) {
    return new Shape(
      data.id,
      Laminas.create(data.laminas),
      Modelo.create(data.modelo),
      data.thumbnail
    )
  }
}

export default Shape
