import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from '@kuba/shape/src/especificacao/template'
import effect from './effect'
import setData from './setData'

@paint(component)
@effect
class Flares {
  #pristine
  #valor

  get descricao () {
    return 'Onda no shape acima da roda para evitar que encostem'
  }

  get nome () {
    return 'Wheel Flares'
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

export default Flares
