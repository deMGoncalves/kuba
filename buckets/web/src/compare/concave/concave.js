import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'

@paint(component)
class Concave {
  get master () {
    return f.first(Compare.shelf).concave
      ? 'Sim'
      : 'Não'
  }

  get slave () {
    return f.last(Compare.shelf).concave
      ? 'Sim'
      : 'Não'
  }
}

export default Concave
