import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Breadcrumb {
  #paths

  get paths () {
    return (this.#paths ??= [])
  }
}

export default Breadcrumb
