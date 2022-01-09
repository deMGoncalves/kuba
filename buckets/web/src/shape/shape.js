import { paint } from '@kuba/h'
import global from '@kuba/global'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
@markup
class Shape {
  get description () {
    return global.descricao
  }

  get image () {
    return global.thumbnail
  }

  get title () {
    return global.modelo
  }
}

export default Shape
