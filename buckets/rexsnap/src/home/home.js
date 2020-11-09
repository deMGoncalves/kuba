import { paint } from '@rex/h'
import jsonld from '@rex/jsonld'
import markup from '@rex/markup'
import * as structured from '@structured'
import component from './component'

@paint(component)
@jsonld(structured.webpage)
@markup
class Home {
  get description () {
    return 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others'
  }

  get title () {
    return 'Rexsnap'
  }

  get url () {
    return location.href
  }
}

export default Home
