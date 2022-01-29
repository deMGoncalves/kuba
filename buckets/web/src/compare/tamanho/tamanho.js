import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'

@paint(component)
class Tamanho {
  get master () {
    return `${f.first(Compare.shelf).tamanho.valor}"`
  }

  get slave () {
    return `${f.last(Compare.shelf).tamanho.valor}"`
  }
}

export default Tamanho
