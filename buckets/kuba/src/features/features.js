import { paint } from '@rex/h'
import ldjson from '@rex/ldjson'
import markup from '@rex/markup'
import * as structured from '@structured'
import component from './component'

@paint(component)
@ldjson(structured.webpage)
@markup
class Features {
  get description () {
    return 'Caindo no meu melhor'
  }

  get title () {
    return 'Kuba'
  }

  get url () {
    return location.href
  }
}

export default Features
