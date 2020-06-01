import { paint } from '@h'
import metadata, { __description__ } from '@metadata'
import component from './component'

@paint(component)
@metadata
class MundoJRMod {
  get [__description__] () {
    return ''
  }

  get title () {
    return ''
  }
}

export default MundoJRMod
