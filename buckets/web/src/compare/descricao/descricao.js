import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'

@paint(component)
class Descricao {
  get master () {
    return f.first(Compare.shelf).descricao
  }

  get slave () {
    return f.last(Compare.shelf).descricao
  }
}

export default Descricao
