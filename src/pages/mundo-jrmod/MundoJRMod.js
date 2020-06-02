import { paint } from '@h'
import metadata, * as md from '@metadata'
import component from './component'

@paint(component)
@metadata
class MundoJRMod {
  get [md.__description__] () {
    return ''
  }

  get [md.__title__] () {
    return 'Mundo JRMod & Chutando lata pedals'
  }
}

export default MundoJRMod
