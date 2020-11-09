import { paint } from '@rex/h'
import jsonld from '@rex/jsonld'
import markup from '@rex/markup'
import * as structured from '@structured'
import component from './component'

@paint(component)
@jsonld(structured.webpage)
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
