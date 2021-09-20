import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import component from './component'
import getCategories from './getCategories'

@paint(component)
@props
class Navigaiton {
  #categories
  #departament
  #title

  get categories () {
    return this.#categories ??= f.repeat({}, 8)
  }

  get departament () {
    return this.#departament
  }

  get title () {
    return this.#title ??= ''
  }

  constructor (props) {
    this.#departament = props.departament
  }

  @repaint
  change (categories) {
    this.#categories = categories
    return this
  }

  @didMount
  async mount () {
    this.change(await getCategories(this))
    return this
  }
}

export default Navigaiton
