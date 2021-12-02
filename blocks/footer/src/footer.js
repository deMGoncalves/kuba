import { paint } from '@kuba/h'
import { urlFor } from '@kuba/router'
import component from './component'

@paint(component)
class Footer {
  redirectTo (page) {
    location.assign(urlFor(page))
    return this
  }
}

export default Footer
