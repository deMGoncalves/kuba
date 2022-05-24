import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import Card from '@kuba/card'
import component from './component'
import discovery from '@kuba/discovery'
import storage from './storage'

@paint(component)
@storage
class Related {
  #shapes

  get empty () {
    return f.equal(f.len(this.shapes), 0)
  }

  get shapes () {
    return this.#shapes ??= f.map(f.repeat(null, 4), Card.stub)
  }

  [storage.query] () {
    const material = discovery
      .serie('material')
      .champion()

    const tamanho = discovery
      .serie('tamanho')
      .champion()

    return {
      material: material ? [material] : [],
      tamanho: tamanho ? [tamanho] : []
    }
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
    return new Related()
  }
}

export default Related
