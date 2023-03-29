import { component, Path } from '@kuba/breadcrumb'
import { paint } from '@kuba/h'
import { params } from '@kuba/router'

@paint(component)
class Breadcrumb {
  #paths

  get paths () {
    const schema = [
      { title: 'Home', page: 'home' },
      { title: 'Iaculis nunc', page: 'departament', params }
    ]
    return (this.#paths ??= schema.map(Path.create))
  }
}

export default Breadcrumb
