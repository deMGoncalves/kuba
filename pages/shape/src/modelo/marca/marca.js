import { paint, repaint } from '@kuba/h'
import { urlFor } from '@kuba/router'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Marca {
  #nome
  #slug

  get href () {
    return urlFor('marca', { marca: this.#slug })
  }

  get nome () {
    return this.#nome
  }

  @repaint
  [effect.onChange] (nome, slug) {
    this.#nome = nome
    this.#slug = slug
    return this
  }
}

export default Marca
