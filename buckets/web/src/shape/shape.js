import { paint } from '@kuba/h'
import global from '@kuba/global'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import Shelf from './shelf'

@paint(component)
@jsonld(data)
@markup
class Shape {
  get description () {
    return global.descricao
  }

  get shelf () {
    return new Shelf()
  }

  get title () {
    return global.modelo
  }
}

export default Shape
