import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'

@paint(component)
class Nose {
  get master () {
    return f.first(Compare.shelf).nose
      ? 'Sim'
      : 'Não'
  }

  get slave () {
    return f.last(Compare.shelf).nose
      ? 'Sim'
      : 'Não'
  }
}

export default Nose
