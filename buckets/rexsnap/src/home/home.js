import { paint } from '@rex/h'
import jsonld from '@rex/jsonld'
import markup from '@rex/markup'
import component from './component'
import webpage from './webpage'

@paint(component)
@jsonld(webpage)
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
