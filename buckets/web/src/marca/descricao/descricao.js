import { paint, repaint } from '@kuba/h'
import component from './component'
import effect, { onChange } from './effect'

@paint(component)
@effect
class Descricao {
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

export default Descricao
