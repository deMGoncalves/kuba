import { didMount, paint, repaint } from '@kuba/h'
import props from '@kuba/props'
import component from './component'
import getData from './getData'

@paint(component)
@props
class Hero {
  #cta
  #description
  #url
  #thumbnails
  #title

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

  @repaint
  change (descriptor) {
    this.#cta = descriptor.cta
    this.#description = descriptor.description
    this.#url = descriptor.url
    this.#thumbnails = descriptor.thumbnails
    this.#title = descriptor.title
    return this
  }

  @didMount
  async mount () {
    this.change(await getData())
    return this
  }

  redirect () {
    location.assign(this.url)
    return this
  }
}

export default Hero
