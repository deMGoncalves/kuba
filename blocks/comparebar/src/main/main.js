import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import actions from './actions'
import component from './component'
import Shape from './shape'

@paint(component)
@actions
class Main {
  get shapes () {
    return f.map(Compare.shelf, Shape.create)
  }
}

export default Main
