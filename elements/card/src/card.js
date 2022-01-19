import * as f from '@kuba/f'
import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import { redirectTo } from '@kuba/router'
import component from './component'
import data from './data'
import Laminas from './laminas'
import Marca from './marca'
import Modelo from './modelo'
import Stub from './stub'

@paint(component)
@jsonld(data)
class Card {
  #concave
  #descricao
  #laminas
  #lixa
  #marca
  #material
  #modelo
  #nose
  #slug
  #tail
  #tamanho
  #thumbnail
  #wheelbase

  get concave () {
    return this.#concave
      ? 'Sim'
      : 'Não'
  }

  get descricao () {
    return this.#descricao ??= ''
  }

  get laminas () {
    return this.#laminas
  }

  get lixa () {
    return this.#lixa
      ? 'Sim'
      : 'Não'
  }

  get marca () {
    return this.#marca
  }

  get material () {
    return f
      .from(this.#material)
      .pipe(f.or(f.__, []))
      .pipe(f.map(f.__, f.prop('valor')))
      .pipe(f.join(f.__, ', '))
      .done()
  }

  get modelo () {
    return this.#modelo
  }

  get nose () {
    return this.#nose
      ? 'Sim'
      : 'Não'
  }

  get slug () {
    return this.#slug ??= ''
  }

  get tail () {
    return this.#tail
      ? 'Sim'
      : 'Não'
  }

  get tamanho () {
    return this.#tamanho
      ? `${this.#tamanho}"`
      : undefined
  }

  get thumbnail () {
    return this.#thumbnail ??= ''
  }

  get wheelbasee () {
    return this.#wheelbase
  }

  constructor (concave, descricao, laminas, lixa, marca, material, modelo, nose, slug, tail, tamanho, thumbnail, wheelbase) {
    this.#concave = concave
    this.#descricao = descricao
    this.#lixa = lixa
    this.#laminas = laminas
    this.#marca = marca
    this.#material = material
    this.#modelo = modelo
    this.#nose = nose
    this.#slug = slug
    this.#tail = tail
    this.#tamanho = tamanho
    this.#thumbnail = thumbnail
    this.#wheelbase = wheelbase
  }

  redirect () {
    redirectTo('shape', { marca: this.marca.slug, shape: this.slug })
    return this
  }

  static create (data) {
    return new Card(
      data.concave,
      data.descricao,
      Laminas.create(data),
      data.lixa,
      Marca.create(data),
      data.material,
      Modelo.create(data),
      data.nose,
      data.slug,
      data.tail,
      data.tamanho,
      data.thumbnail,
      data.wheelbase
    )
  }

  static stub () {
    return new Stub()
  }
}

export default Card
