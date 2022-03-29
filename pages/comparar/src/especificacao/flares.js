import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import template from './template'

@paint(template)
class Flares {
  get descricao () {
    return 'Onda no shape acima da roda para evitar que encostem'
  }

  get master () {
    return Shape.master?.wheel_flares
  }

  get nome () {
    return 'Wheel Flares'
  }

  get slave () {
    return Shape.slave?.wheel_flares
  }
}

export default Flares
