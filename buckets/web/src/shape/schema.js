import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import data from './data'

@jsonld(data)
class Schema {
  #brand
  #concave
  #description
  #id
  #image
  #lixa
  #material
  #name
  #nose
  #size
  #tail
  #wheelbase

  get brand () {
    return this.#brand
  }

  get concave () {
    return this.#concave
  }

  get description () {
    return this.#description
  }

  get id () {
    return this.#id
  }

  get image () {
    return this.#image
  }

  get lixa () {
    return this.#lixa
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

  get nose () {
    return this.#nose
  }

  get size () {
    return this.#size
      ? `${this.#size.valor}"`
      : undefined
  }

  get tail () {
    return this.#tail
  }

  get wheelbase () {
    return this.#wheelbase
  }

  constructor (brand, concave, description, id, image, lixa, material, name, nose, size, tail, wheelbase) {
    this.#brand = brand
    this.#concave = concave
    this.#description = description
    this.#id = id
    this.#image = image
    this.#lixa = lixa
    this.#material = material
    this.#name = name
    this.#nose = nose
    this.#size = size
    this.#tail = tail
    this.#wheelbase = wheelbase
  }

  static create (shape) {
    return new Schema(
      shape.marca,
      shape.concave,
      shape.descricao,
      shape.slug,
      shape.thumbnail,
      shape.material,
      shape.modelo,
      shape.nose,
      shape.tamanho,
      shape.tail,
      shape.wheelbase
    )
  }
}

export default Schema
