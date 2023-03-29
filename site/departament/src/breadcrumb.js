import { component, Path } from '@kuba/breadcrumb'
import { paint } from '@kuba/h'
import { params } from '@kuba/router'
import Departament from './departament'

@paint(component)
class Breadcrumb {
  #paths = [
    { title: 'Home', page: 'home' },
    { title: Departament.title, page: 'departament', params }
  ]

  get paths () {
    return this.#paths.map(Path.create)
  }
}

export default Breadcrumb
