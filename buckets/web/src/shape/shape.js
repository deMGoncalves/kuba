import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
@markup
class Shape {
  #description
  #title

  get description () {
    return this.#description
  }

  get title () {
    return this.#title
  }

  constructor (data) {
    this.#description = data.descricao
    this.#title = data.modelo
  }
}

export default Shape
