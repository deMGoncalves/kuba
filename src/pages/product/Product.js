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
}

export default Product
