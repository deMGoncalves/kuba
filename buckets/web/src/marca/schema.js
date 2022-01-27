import jsonld from '@kuba/jsonld'
import data from './data'

@jsonld(data)
class Schema {
  #description
  #id
  #logo
  #name

  get description () {
    return this.#description
  }

  get id () {
    return this.#id
  }

  get logo () {
    return this.#logo
  }

  get name () {
    return this.#name
  }

  constructor (description, id, logo, name) {
    this.#description = description
    this.#id = id
    this.#logo = logo
    this.#name = name
  }

  static create (marca) {
    return new Schema(
      marca.descricao,
      marca.slug,
      marca.logo,
      marca.nome
    )
  }
}

export default Schema
