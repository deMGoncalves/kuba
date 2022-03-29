import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import template from './template'

@paint(template)
class Wells {
  get descricao () {
    return 'Poço para as rodas não encostar no shape'
  }

  get master () {
    return Shape.master?.wheel_wells
  }

  get nome () {
    return 'Wheel Wells'
  }

  get slave () {
    return Shape.slave?.wheel_wells
  }
}

export default Wells
