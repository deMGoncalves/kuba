import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Link {
  #nome
  #url
  get nome () {
    return this.#nome ??= ''
  }

  get url () {
    return this.#url ??= ''
  }

  constructor (url, nome) {
    this.#url = url
    this.#nome = nome
  }

  redirect () {
    window.open(this.url)
    return this
  }

  static create (props) {
    return new Link(
      props?.site,
      props?.nome
    )
  }
}

export default Link
