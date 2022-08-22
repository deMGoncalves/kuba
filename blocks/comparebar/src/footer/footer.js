import * as f from '@kuba/f'
import { paint } from '@kuba/h'
import { redirectTo, urlFor } from '@kuba/router'
import actions from './actions'
import component from './component'

@paint(component)
@actions
class Footer {
  get href () {
    return urlFor('compare')
  }

  redirect () {
    redirectTo('compare')
    return this
  }

  [component.valid] () {
    return f
      .from(localStorage.getItem('_kuba.compare'))
      .pipe(f.or(f.__, '[]'))
      .pipe(JSON.parse)
      .pipe(f.slice(f.__, -2))
      .pipe(f.len)
      .pipe(f.equal(2))
      .done()
  }
}

export default Footer
