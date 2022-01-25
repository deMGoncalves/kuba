import jsonld from '@kuba/jsonld'
import data from './data'

@jsonld(data)
class Schema {
  #descricao
  #nome

  get descricao () {
    return this.#descricao
  }

  get nome () {
    return this.#nome
  }

  constructor (descricao, nome) {
    this.#descricao = descricao
    this.#nome = nome
  }

  static create (marca) {
    return new Schema(
      marca.descricao,
      marca.nome
    )
  }
}

export default Schema
