import * as f from '@kuba/f'
import { component, data, Path } from '@kuba/breadcrumb'
import { paint, repaint } from '@kuba/h'
import effect from './effect'
import jsonld from '@kuba/jsonld'

@paint(component)
@jsonld(data)
@effect
class Breadcrumb {
  #paths

  get paths () {
    return this.#paths ??= f.i(f.map)(f.repeat(null, 2), Path.stub)
  }

  @repaint
  [effect.onChange] (paths) {
    this.#paths = f.i(f.map)(paths, Path.create)
    return this
  }
}

export default Breadcrumb
