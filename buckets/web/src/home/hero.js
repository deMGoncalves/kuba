import { paint, repaint } from '@kuba/h'
import ml from './ml'
import Shelf, { component, storage } from './shelf'

@paint(component)
@storage
class Hero extends Shelf {
  get title () {
    return 'Descubra novas possibilidades para o seu role'
  }

  [storage.query] () {
    return {
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

export default Hero
