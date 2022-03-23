import * as f from '@kuba/f'
import { didMount, paint } from '@kuba/h'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'
import data from './data'
import jsonld from '@kuba/jsonld'
import storage from './storage'

@paint(component)
@jsonld(data)
@storage
class Marcas {
  get description () {
    return 'Descubra novas possibilidades no kuba'
  }

  get title () {
    return 'Marcas'
  }

  @didMount
  [f.dunder.mount] () {
    setTitle(this.title)
    setDescription(this.description)
    return this
  }
}

export default Marcas
