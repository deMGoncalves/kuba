import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'
import formatString from './formatString'

@paint(component)
class Details {
  get concave () {
    return formatString(global.concave)
  }

  get description () {
    return global.descricao
  }

  get lixa () {
    return formatString(global.lixa)
  }

  get material () {
    return ''
  }

  get nose () {
    return formatString(global.nose)
  }

  get tail () {
    return formatString(global.nose)
  }

  get tamanho () {
    return global.tamanho.valor
  }

  get origem () {
    return global.marca.origem.valor
  }
}

export default Details
