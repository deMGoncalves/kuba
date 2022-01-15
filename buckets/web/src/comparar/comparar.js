import { paint } from '@kuba/h'
import markup from '@kuba/markup'
import * as settings from '@kuba/settings'
import component from './component'

@paint(component)
@markup
class Comparar {
  get description () {
    return settings.app.description
  }

  get title () {
    return 'Comparar'
  }
}

export default Comparar
