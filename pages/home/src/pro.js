import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import ml from './ml'
import Shelf, { component, storage } from './shelf'

@paint(component)
@storage
class Pro extends Shelf {
  get title () {
    return 'Pro Model'
  }

  [storage.query] () {
    return {
      pro: f.T(),
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

export default Pro
