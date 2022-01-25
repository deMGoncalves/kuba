import { paint } from '@kuba/h'
import * as settings from '@kuba/settings'
import component from './component'

@paint(component)
class ThemeColor {
  get content () {
    return settings.app.themeColor
  }
}

export default ThemeColor
