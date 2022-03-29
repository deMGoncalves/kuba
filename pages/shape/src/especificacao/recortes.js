import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import effect from './effect'
import setData from './setData'
import template from './template'

@paint(template)
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
  [effect.onChange] (shape) {
    this.#pristine = f.F()
    this.#valor = shape.cut_outs
    setData(this)
    return this
  }
}

export default Recortes
