import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Thumbnail {
  #logo
  #nome
  #site
  get logo () {
    return this.#logo ??= ''
  }

  get nome () {
    return this.#nome ??= ''
  }

  get site () {
    return this.#site ??= ''
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

  static create (props) {
    return new Thumbnail(
      props?.logo,
      props?.nome,
      props?.site
    )
  }
}

export default Thumbnail
