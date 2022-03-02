import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import { component, data, Path } from '@kuba/breadcrumb'
import jsonld from '@kuba/jsonld'
import schema from './schema.json'

@paint(component)
@jsonld(data)
class Breadcrumb {
  #paths

  get paths () {
    return this.#paths ??= f.map(schema, Path.create)
  }
}

export default Breadcrumb
