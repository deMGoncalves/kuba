import { paint } from '@rex/h'
import markup from '@rex/markup'
import component from './component'

@paint(component)
@markup
class Stories {
  get description () {
    return 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others'
  }

  get title () {
    return 'Stories • Create and share your photo stories'
  }
}

export default Stories
