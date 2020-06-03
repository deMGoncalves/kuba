import { paint } from '@h'
import metadata from '@metadata'
import opengraph from '@opengraph'
import twittercard from '@twittercard'
import component from './component'

@paint(component)
@metadata
@opengraph
@twittercard
class Home {
}

export default Home
