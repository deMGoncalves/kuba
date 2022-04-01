import { paint, repaint } from '@kuba/h'
import ml from './ml'
import Shelf, { component, storage } from './shelf'

@paint(component)
@storage
class Material extends Shelf {
  get title () {
    return ml.material
  }

  [storage.query] () {
    return {
      material: ml.material,
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

export default Material
