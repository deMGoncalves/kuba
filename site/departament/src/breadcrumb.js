import { component, Path } from '@kuba/breadcrumb'
import { paint } from '@kuba/h'
import { params, urlFor } from '@kuba/router'
import Departament from './departament'

@paint(component)
class Breadcrumb {
  #paths = [
    { title: 'Home', href: urlFor('home') },
    { title: Departament.title, href: urlFor('departament', params) }
  ]

  get paths () {
    return this.#paths.map(Path.create)
  }
}

export default Breadcrumb
