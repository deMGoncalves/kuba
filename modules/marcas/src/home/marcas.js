import { didMount, paint } from '@kuba/h'
import { setDescription, setTitle } from '@kuba/markup'
import { setGlobal } from '@kuba/global'
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

  [storage.onError] () {
    return this
  }

  @didMount
  [storage.onResponse] (marcas) {
    setTitle(this.title)
    setDescription(this.description)
    setGlobal({ marcas })
    return this
  }
}

export default Marcas
