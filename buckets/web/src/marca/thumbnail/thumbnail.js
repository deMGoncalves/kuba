import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Thumbnail {
  #logo
  #nome
  #site

  get logo () {
    return this.#logo
  }

  get nome () {
    return this.#nome
  }

  get site () {
    return this.#site
  }

  constructor (logo, nome, site) {
    this.#logo = logo
    this.#nome = nome
    this.#site = site
  }

  redirect () {
    window.open(this.site)
    return this
  }

  static create () {
    return new Thumbnail(
      global.logo,
      global.nome,
      global.site
    )
  }
}

export default Thumbnail
