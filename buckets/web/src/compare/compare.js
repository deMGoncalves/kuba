import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
class Compare {
  get description () {
    return 'Está com dúvidas? Descubra qual shape é o melhor para seu setup'
  }

  get title () {
    return 'Comparar'
  }
}

export default Compare
