import { paint, repaint } from '@kuba/h'
import component from './component'
import effect, { onChange } from './effect'

@paint(component)
@effect
class Nome {
  #valor

  get valor () {
    return this.#valor ??= ''
  }

  @repaint
  [onChange] (valor) {
    this.#valor = valor
    return this
  }
}

export default Nome
