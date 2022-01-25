import { paint } from '@kuba/h'
import * as settings from '@kuba/settings'
import component from './component'

@paint(component)
class Base {
  get href () {
    return settings.app.base
  }
}

export default Base
