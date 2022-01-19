import { paint } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import global from '@kuba/global'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import schema from './schema'

@paint(component)
@jsonld(data)
@markup
class Marca {
  #breadcrumb

  get breadcrumb () {
    return this.#breadcrumb ??= Breadcrumb.create(schema().breadcrumb)
  }

  get description () {
    return global.descricao
  }

  get title () {
    return global.nome
  }
}

export default Marca
