import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Material {
  #valor

  get valor () {
    return this.#valor ||= '-'
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (data) {
    return new Material(
      f
        .from(data.material)
        .pipe(f.or(f.__, []))
        .pipe(f.map(f.__, f.prop('valor')))
        .pipe(f.join(f.__, ', '))
        .done()
    )
  }
}

export default Material
