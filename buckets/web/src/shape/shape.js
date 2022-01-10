import { paint } from '@kuba/h'
import global from '@kuba/global'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import Shelf from './shelf'
import Modelo from './modelo'
import Thumbnail from './thumbnail'

@paint(component)
@jsonld(data)
@markup
class Shape {
  #modelo
  #thumbnail

  get description () {
    return global.descricao
  }

  get modelo () {
    return this.#modelo ??= Modelo.create()
  }

  get shelf () {
    return new Shelf()
  }

  get thumbnail () {
    return this.#thumbnail ??= Thumbnail.create()
  }

  get title () {
    return this.modelo.valor
  }
}

export default Shape
