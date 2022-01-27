import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import data from './data'

@jsonld(data)
class Schema {
  #description
  #id
  #image
  #material
  #name
  #size

  get description () {
    return this.#description
  }

  get id () {
    return this.#id
  }

  get image () {
    return this.#image
  }

  get material () {
    return f
      .from(this.#material)
      .pipe(f.or(f.__, []))
      .pipe(f.map(f.__, f.prop('valor')))
      .pipe(f.join(f.__, ', '))
      .done()
  }

  get name () {
    return this.#name
  }

  get size () {
    return this.#size
      ? `${this.#size.valor}"`
      : undefined
  }

  constructor (description, id, image, material, name, size) {
    this.#description = description
    this.#id = id
    this.#image = image
    this.#material = material
    this.#name = name
    this.#size = size
  }

  static create (shape) {
    return new Schema(
      shape.descricao,
      shape.slug,
      shape.thumbnail,
      shape.material,
      shape.modelo,
      shape.tamanho
    )
  }
}

export default Schema
