import { paint } from '@kuba/h'
import { redirectTo } from '@kuba/router'
import component from './component'

@paint(component)
class Header {
  back () {
    history.length
      ? history.back()
      : redirectTo('shapes')
    return this
  }
}

export default Header
