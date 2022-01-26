import jsonld from '@kuba/jsonld'
import data from './data'

@jsonld(data)
class Schema {
  #description
  #name

  get description () {
    return this.#description
  }

  get name () {
    return this.#name
  }

  constructor (description, name) {
    this.#description = description
    this.#name = name
  }

  static create (shape) {
    return new Schema(
      shape.descricao,
      shape.modelo
    )
  }
}

export default Schema
