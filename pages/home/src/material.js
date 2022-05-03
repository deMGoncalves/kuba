import { paint, repaint } from '@kuba/h'
import discovery from '@kuba/discovery'
import Shelf, { component, storage } from './shelf'

@paint(component)
@storage
class Material extends Shelf {
  get title () {
    return discovery.serie('material').champion()
  }

  [storage.query] () {
    return {
      material: [discovery.serie('material').champion()],
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

export default Material
