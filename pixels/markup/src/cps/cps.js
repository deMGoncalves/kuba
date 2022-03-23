import * as settings from '@kuba/settings'
import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class CPS {
  get content () {
    return settings.app.cps
  }
}

export default CPS
