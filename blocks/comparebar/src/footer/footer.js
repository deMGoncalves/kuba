import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import actions from './actions'
import component from './component'

@paint(component)
@actions
class Footer {
  get valid () {
    return f
      .from(Compare.shelf)
      .pipe(f.len)
      .pipe(f.equal(2))
      .done()
  }
}

export default Footer
