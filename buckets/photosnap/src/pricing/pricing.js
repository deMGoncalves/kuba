import { paint } from '@rex/h'
import markup from '@rex/markup'
import component from './component'

@paint(component)
@markup
class Pricing {
  get description () {
    return 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos'
  }

  get title () {
    return 'Pricing • Create and share your photo stories'
  }
}

export default Pricing
