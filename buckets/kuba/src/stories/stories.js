import { paint } from '@rex/h'
import ldjson from '@rex/ldjson'
import markup from '@rex/markup'
import * as structured from '@structured'
import component from './component'

@paint(component)
@ldjson(structured.webpage)
@markup
class Stories {
  get description () {
    return 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others'
  }

  get title () {
    return 'Stories • Create and share your photo stories'
  }

  get url () {
    return location.href
  }
}

export default Stories
