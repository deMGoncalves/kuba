import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Site {
  #preco
  #pristine
  #url

  get content () {
    return this.#preco
      ? Site.comPreco
      : Site.semPreco
  }

  get pristine () {
    return this.#pristine ??= f.T()
  }

  get url () {
    return this.#url ??= ''
  }

  static get comPreco () {
    return 'Comprar'
  }

  static get semPreco () {
    return 'Ver mais'
  }

  redirect () {
    window.open(this.url, '_blank')
    return this
  }

  @repaint
  [effect.onChange] (url, preco) {
    this.#preco = f.isTruthy(preco)
    this.#pristine = f.F()
    this.#url = url
    return this
  }
}

export default Site
