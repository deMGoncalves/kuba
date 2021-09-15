import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'
import getData from './getData'

@paint(component)
@props
class Inspiration {
  #cta
  #description
  #departaments
  #subtitle
  #thumbnails
  #title
  #url

  get cta () {
    return this.#cta ??= ''
  }

  get description () {
    return this.#description ??= ''
  }

  get departaments () {
    return this.#departaments ??= f.repeat({}, 4)
  }

  get subtitle () {
    return this.#subtitle ??= ''
  }

  get thumbnails () {
    return this.#thumbnails ??= []
  }

  get title () {
    return this.#title ??= ''
  }

  get url () {
    return this.#url ??= '#'
  }

  @repaint
  change (descriptor) {
    this.#cta = descriptor.cta
    this.#description = descriptor.description
    this.#departaments = descriptor.departaments
    this.#subtitle = descriptor.subtitle
    this.#thumbnails = descriptor.thumbnails
    this.#title = descriptor.title
    this.#url = descriptor.url
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

export default Inspiration
