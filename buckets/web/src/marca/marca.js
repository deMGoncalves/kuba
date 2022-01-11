import { paint } from '@kuba/h'
import global from '@kuba/global'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import Thumbnail from './thumbnail'
import Descricao from './descricao'

@paint(component)
@jsonld(data)
@markup
class Marca {
  #thumbnail
  #descricao
  get descricao () {
    return this.#descricao ??= Descricao.create(global)
  }

  get title () {
    return global.nome
  }

  get thumbnail () {
    return this.#thumbnail ??= Thumbnail.create(global)
  }
}

export default Marca
