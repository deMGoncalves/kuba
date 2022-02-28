import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import Card from '@kuba/card'
import component from './component'
import storage from './storage'

@paint(component)
@storage
class Marca {
  #shapes

  get empty () {
    return f.isFalsy(this.valor)
  }

  get shapes () {
    return this.#shapes ??= f.map(f.repeat(null, 4), Card.stub)
  }

  get valor () {
    const marca = JSON.parse(f.or(localStorage.getItem('_ml.marca'), '{}'))

    return f
      .from(marca)
      .pipe(f.entries)
      .pipe(f.reduce(f.__, (x, y) => f.gte(x[1], y[1]) ? x : y, []))
      .pipe(f.prop('[0]'))
      .done()
  }

  @repaint
  [storage.onError] () {
    this.#shapes = []
    return this
  }

  @repaint
  [storage.onResponse] (shapes) {
    this.#shapes = f.map(shapes, Card.create)
    return this
  }

  static create () {
    return new Marca()
  }
}

export default Marca
