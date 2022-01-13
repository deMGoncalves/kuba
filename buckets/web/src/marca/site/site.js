import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Site {
  #url

  get url () {
    return this.#url
  }

  constructor (url) {
    this.#url = url
  }

  static create () {
    return new Site(global.site)
  }
}

export default Site
