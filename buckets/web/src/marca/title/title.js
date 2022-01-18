import { paint } from '@kuba/h'
import global from '@kuba/global'
import component from './component'

@paint(component)
class Title {
  get valor () {
    return global.nome
  }
}

export default Title
