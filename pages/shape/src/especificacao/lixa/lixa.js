import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from '@kuba/shape/src/especificacao/template'
import effect from './effect'
import setData from './setData'

@paint(component)
@effect
class Lixa {
  #pristine
  #valor

  get descricao () {
    return this.valor
  }

  get nome () {
    return 'Lixa'
  }

  get pristine () {
    return this.#pristine ??= f.T()
  }

  get valor () {
    return this.#valor ??= ''
  }

  @repaint
  [effect.onChange] (valor) {
    this.#pristine = f.F()
    this.#valor = valor
    setData(valor)
    return this
  }
}

export default Lixa
