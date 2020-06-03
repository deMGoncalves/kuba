import { paint } from '@h'
import metadata, * as md from '@metadata'
import opengraph, * as og from '@opengraph'
import twittercard from '@twittercard'
import component from './component'

const __title__ = Symbol('title')

@paint(component)
@metadata
@opengraph
@twittercard
class MundoJRMod {
  get [md.__title__] () {
    return this[__title__]
  }

  get [og.__title__] () {
    return this[__title__]
  }

  constructor () {
    this[__title__] = 'Mundo JRMod & Chutando lata pedals'
  }
}

export default MundoJRMod
