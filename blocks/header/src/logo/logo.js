import { paint } from '@kuba/h'
import props from '@kuba/props'
import { urlFor } from '@kuba/router'
import component from './component'
import event from './event'

@paint(component)
@props
class Nav {
  @event.redirect
  redirectTo (page) {
    location.assign(urlFor(page))
    return this
  }
}

export default Nav
