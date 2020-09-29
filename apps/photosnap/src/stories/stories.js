import { paint } from '@rex/h'
import markup from '@rex/markup'
import component from './component'

@paint(component)
@markup
class Stories {
  get title () {
    return 'Stories • Create and share your photo stories'
  }
}

export default Stories
