import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Thumbnail {
  #logo
  #nome
  #site

  get logo () {
    return global.logo
  }

  get nome () {
    return global.nome
  }

  get site () {
    return global.site
  }

  redirect () {
    window.open(this.site)
    return this
  }
}

export default Thumbnail
