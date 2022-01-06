import { paint } from '@kuba/h'
import global from '@kuba/global'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
@markup
class Marca {
  get description () {
    return global.descricao
  }

  get title () {
    return global.nome
  }
}

export default Marca
