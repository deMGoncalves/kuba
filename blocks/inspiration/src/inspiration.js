import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import getData from './getData'

@paint(component)
@getData
class Inspiration {
  #className
  #departaments
  #thumbnails
  #title

  get className () {
    return this.#className
  }

  get departaments () {
    return this.#departaments ??= f.repeat({}, 4)
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
    this.#departaments = descriptor.departaments
    this.#thumbnails = descriptor.thumbnails
    this.#title = descriptor.title
    return this
  }
}

export default Inspiration
