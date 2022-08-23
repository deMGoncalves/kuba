import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import discovery from '@kuba/discovery'
import schema from './schema.json'
import Shelf, { component, storage } from './shelf'

@paint(component)
@storage
class Marca extends Shelf {
  get title () {
    return f.or(discovery.serie('marca').champion(), schema.fallback.marca)
  }

  [storage.query] () {
    const marca = discovery
      .serie('marca')
      .champion()

    const tamanho = discovery
      .serie('tamanho')
      .champion()

    return {
      marca: marca ? [marca] : [schema.fallback.marca],
      tamanho: tamanho ? [tamanho] : []
    }
  }

  @repaint
  [storage.onError] () {
    super[storage.onError]()
    return this
  }

  @repaint
  [storage.onResponse] (shapes) {
    super[storage.onResponse](shapes)
    return this
  }
}

export default Marca
