import { paint } from '@kuba/h'
import { Shape } from '@kuba/comparar'
import template from './template'

@paint(template)
class Tamanho {
  get descricao () {
    return 'Medida do comprimento de desenvolvido do shape'
  }

  get master () {
    return `${Shape.master?.tamanho?.valor}"`
  }

  get nome () {
    return 'Tamanho'
  }

  get slave () {
    return `${Shape.slave?.tamanho?.valor}"`
  }
}

export default Tamanho
