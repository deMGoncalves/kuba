import { paint } from '@rex/h'
import jsonld from '@rex/jsonld'
import markup from '@rex/markup'
import component from './component'
import webpage from './webpage'

@paint(component)
@jsonld(webpage)
@markup
class Features {
  get description () {
    return 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories'
  }

  get title () {
    return 'Features • Create and share your photo stories'
  }

  get url () {
    return location.href
  }
}

export default Features
