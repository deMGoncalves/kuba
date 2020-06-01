import { paint } from '@h'
import metadata, { __description__, __title__ } from '@metadata'
import component from './component'

@paint(component)
@metadata
class MundoJRMod {
  get [__description__] () {
    return ''
  }

  get [__title__] () {
    return 'Mundo JRMod & Chutando lata pedals'
  }
}

export default MundoJRMod
