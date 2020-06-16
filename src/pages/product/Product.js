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
class Product {
  get title () {
    return 'Samsung Galaxy A30s 64GB Branco'
  }
}

export default Product
