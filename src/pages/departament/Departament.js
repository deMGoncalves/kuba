import { paint } from '@h'
import metadata from '@metadata'
import opengraph from '@opengraph'
import structureddata from '@structureddata'
import twittercard from '@twittercard'
import component from './component'

@paint(component)
@metadata
@opengraph
@structureddata
@twittercard
class Home {
  constructor (attr) {
    this.title = attr.title
    return this
  }
}

export default Home
