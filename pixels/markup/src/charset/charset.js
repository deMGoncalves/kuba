import * as settings from '@kuba/settings'
import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Charset {
  get content () {
    return settings.app.charset
  }
}

export default Charset
