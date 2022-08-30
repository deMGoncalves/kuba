import * as f from '@kuba/f'
import { component, data, Path } from '@kuba/breadcrumb'
import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import schema from './schema'

@paint(component)
@jsonld(data)
class Breadcrumb {
  #paths

  get paths () {
    return this.#paths ??= f.i(f.map)(schema, Path.create)
  }
}

export default Breadcrumb
