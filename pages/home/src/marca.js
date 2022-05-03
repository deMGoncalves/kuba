import { paint, repaint } from '@kuba/h'
import discovery from '@kuba/discovery'
import Shelf, { component, storage } from './shelf'

@paint(component)
@storage
class Marca extends Shelf {
  get title () {
    return discovery.serie('marca').champion()
  }

  [storage.query] () {
    const marca = discovery
      .serie('marca')
      .champion()

    const tamanho = discovery
      .serie('tamanho')
      .champion()

    return {
      marca: marca ? [marca] : [],
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
