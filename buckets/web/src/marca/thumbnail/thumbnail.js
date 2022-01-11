import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Thumbnail {
  #info
  #logo
  #nome
  get logo () {
    return this.#logo ??= ''
  }

  get nome () {
    return this.#nome ??= ''
  }

  constructor (logo, nome) {
    this.#logo = logo
    this.#nome = nome
  }

  static create (props) {
    return new Thumbnail(
      props?.logo,
      props?.nome
    )
  }
}

export default Thumbnail
