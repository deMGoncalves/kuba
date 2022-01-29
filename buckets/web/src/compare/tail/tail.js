import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'

@paint(component)
class Tail {
  get master () {
    return f.first(Compare.shelf).tail
      ? 'Sim'
      : 'Não'
  }

  get slave () {
    return f.last(Compare.shelf).tail
      ? 'Sim'
      : 'Não'
  }
}

export default Tail
