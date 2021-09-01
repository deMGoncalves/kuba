import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'
import getData from './getData'

@paint(component)
@getData
@props
class Inspiration {
  #departaments
  #thumbnails
  #title

  get departaments () {
    return this.#departaments ??= f.repeat({}, 4)
  }

  get thumbnails () {
    return this.#thumbnails ??= []
  }

  get title () {
    return this.#title ??= ''
  }

  @repaint
  change (descriptor) {
    this.#departaments = descriptor.departaments
    this.#thumbnails = descriptor.thumbnails
    this.#title = descriptor.title
    return this
  }
}

export default Inspiration
