import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'

@paint(component)
class Wheelbase {
  get master () {
    return `${f.first(Compare.shelf).wheelbase.valor}"`
  }

  get slave () {
    return `${f.last(Compare.shelf).wheelbase.valor}"`
  }
}

export default Wheelbase
