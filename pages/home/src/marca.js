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
    return {
      marca: [discovery.serie('marca').champion()],
      tamanho: [discovery.serie('tamanho').champion()]
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
