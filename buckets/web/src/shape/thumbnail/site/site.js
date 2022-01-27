import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Site {
  #pristine
  #url

  get pristine () {
    return this.#pristine ??= f.T()
  }

  get url () {
    return this.#url ??= ''
  }

  redirect () {
    window.open(this.url, '_blank')
    return this
  }

  @repaint
  changeValor (url) {
    this.#pristine = f.F()
    this.#url = url
    return this
  }
}

export default Site
