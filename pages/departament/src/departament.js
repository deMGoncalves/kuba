import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
@markup
class Departament {
  #description
  #id
  #name

  get description () {
    return new DOMParser()
      .parseFromString(this.#description, 'text/html')
      .body
      .innerText
  }

  get id () {
    return this.#id
  }

  get title () {
    return this.#name
  }

  constructor (props) {
    this.#description = props.description
    this.#id = props.id
    this.#name = props.name
  }
}

export default Departament
