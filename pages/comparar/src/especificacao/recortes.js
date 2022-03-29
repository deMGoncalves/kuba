import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import template from './template'

@paint(template)
class Recortes {
  get descricao () {
    return 'Recorte ao redor das rodas do shape'
  }

  get master () {
    return Shape.master?.cut_outs
  }

  get nome () {
    return 'Cut-outs'
  }

  get slave () {
    return Shape.slave?.cut_outs
  }
}

export default Recortes
