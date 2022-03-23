import * as f from '@kuba/f'
import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import component from './component'

@paint(component)
class Wheelbase {
  get master () {
    const valor = Shape.master?.wheelbase?.valor

    return valor
      ? f.add(valor, this[f.dunder.medida](valor))
      : ''
  }

  get slave () {
    const valor = Shape.slave?.wheelbase?.valor

    return valor
      ? f.add(valor, this[f.dunder.medida](valor))
      : ''
  }

  [f.dunder.medida] (value) {
    return f.test(/N\/D/, value)
      ? ''
      : '"'
  }
}

export default Wheelbase
