import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import getData from './getData'

@paint(component)
@getData
class Workspace {
  #className
  #description
  #steps
  #title

  get className () {
    return this.#className
  }

  get description () {
    return this.#description ??= ''
  }

  get steps () {
    return this.#steps ??= f.repeat({}, 4)
  }

  get title () {
    return this.#title ??= ''
  }

  constructor (props) {
    this.#className = props.className
  }

  @repaint
  change (descriptor) {
    this.#description = descriptor.description
    this.#steps = descriptor.steps
    this.#title = descriptor.title
    return this
  }
}

export default Workspace
