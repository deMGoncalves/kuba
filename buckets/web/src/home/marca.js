import { paint, repaint } from '@kuba/h'
import ml from './ml'
import Shelf, { component, storage } from './shelf'

@paint(component)
@storage
class Marca extends Shelf {
  get title () {
    return ml.marca
  }

  [storage.query] () {
    return {
      marca: [ml.marca],
      tamanho: ml.tamanho
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
