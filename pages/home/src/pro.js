import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import discovery from '@kuba/discovery'
import Shelf, { component, storage } from './shelf'

@paint(component)
@storage
class Pro extends Shelf {
  get title () {
    return 'Pro Model'
  }

  [storage.query] () {
    const pro = f.T()

    const tamanho = discovery
      .serie('tamanho')
      .champion()

    return {
      pro,
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

export default Pro
