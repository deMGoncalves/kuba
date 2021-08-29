import { paint, repaint } from '@kuba/h'
import component from './component'
import getData from './getData'

@paint(component)
@getData
class Hero {
  #className
  #cta
  #description
  #url
  #thumbnails
  #title

  get className () {
    return this.#className
  }

  get cta () {
    return this.#cta ??= ''
  }

  get description () {
    return this.#description ??= ''
  }

  get url () {
    return this.#url ??= '#'
  }

  get thumbnails () {
    return this.#thumbnails ??= []
  }

  get title () {
    return this.#title ??= ''
  }

  constructor (props) {
    this.#className = props.className
  }

  @repaint
  change (descriptor) {
    this.#cta = descriptor.cta
    this.#description = descriptor.description
    this.#url = descriptor.url
    this.#thumbnails = descriptor.thumbnails
    this.#title = descriptor.title
    return this
  }

  redirect () {
    location.assign(this.url)
    return this
  }
}

export default Hero
