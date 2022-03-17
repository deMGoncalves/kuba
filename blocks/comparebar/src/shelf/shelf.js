import * as f from '@kuba/f'
import { paint } from '@kuba/h'
import actions from './actions'
import component from './component'
import Shape from './shape'

@paint(component)
@actions
class Shelf {
  get shapes () {
    return f
      .from(localStorage.getItem('_kuba.compare'))
      .pipe(f.or(f.__, '[]'))
      .pipe(JSON.parse)
      .pipe(f.slice(f.__, -2))
      .pipe(f.map(f.__, Shape.create))
      .done()
  }
}

export default Shelf
