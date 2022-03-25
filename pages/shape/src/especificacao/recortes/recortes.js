import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from '@kuba/shape/src/especificacao/template'
import effect from './effect'
import setData from './setData'

@paint(component)
@effect
class Recortes {
  #pristine
  #valor

  get descricao () {
    return 'Recorte ao redor das rodas do shape'
  }

  get nome () {
    return 'Cut-outs'
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

export default Recortes
