import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Creditos {
  #marca
  #url

  get marca () {
    return this.#marca
  }

  get url () {
    return this.#url
  }

  constructor (marca, url) {
    this.#marca = marca
    this.#url = url
  }

  static create () {
    return new Creditos(
      global.marca?.nome,
      global.marca?.site
    )
  }
}

export default Creditos
