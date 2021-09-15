import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'
import getData from './getData'

@paint(component)
@props
class Workspace {
  #description
  #steps
  #title

  get description () {
    return this.#description ??= ''
  }

  get steps () {
    return this.#steps ??= f.repeat({}, 4)
  }

  get title () {
    return this.#title ??= ''
  }

  @repaint
  change (descriptor) {
    this.#description = descriptor.description
    this.#steps = descriptor.steps
    this.#title = descriptor.title
    return this
  }

  @didMount
  async mount () {
    this.change(await getData())
    return this
  }
}

export default Workspace
