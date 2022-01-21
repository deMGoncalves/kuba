import { paint } from '@kuba/h'
import { urlFor } from '@kuba/router'
import * as settings from '@kuba/settings'
import component from './component'
import event from './event'

@paint(component)
class Footer {
  get description () {
    return settings.app.description
  }

  @event.redirect
  redirectTo (page) {
    location.assign(urlFor(page))
    return this
  }
}

export default Footer
