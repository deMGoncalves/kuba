import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'
import getData from './getData'

@paint(component)
@props
class Report {
  #shields
  #title

  get shields () {
    return this.#shields ??= f.repeat({}, 4)
  }

  get title () {
    return this.#title ??= ''
  }

  @repaint
  change (descriptor) {
    this.#shields = descriptor.shields
    return this
  }

  @didMount
  async mount () {
    this.change(await getData())
    return this
  }
}

export default Report
