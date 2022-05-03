import { paint, repaint } from '@kuba/h'
import discovery from '@kuba/discovery'
import Shelf, { component, storage } from './shelf'

@paint(component)
@storage
class Hero extends Shelf {
  get title () {
    return 'Descubra novas possibilidades para o seu role'
  }

  [storage.query] () {
    const tamanho = discovery
      .serie('tamanho')
      .champion()

    return {
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

export default Hero
