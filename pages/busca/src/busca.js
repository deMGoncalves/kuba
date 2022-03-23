import * as f from '@kuba/f'
import { didMount, paint } from '@kuba/h'
import { redirectTo } from '@kuba/router'
import { setGlobal } from '@kuba/global'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'
import data from './data'
import jsonld from '@kuba/jsonld'
import storage from './storage'

@paint(component)
@jsonld(data)
@storage
class Busca {
  get description () {
    return 'Resultado de busca! Escolha o melhor shape para o seu setup'
  }

  get title () {
    return 'Busca'
  }

  @didMount
  [f.dunder.mount] () {
    setTitle(this.title)
    setDescription(this.description)
    return this
  }

  [storage.onError] () {
    redirectTo('shapes')
    return this
  }

  [storage.onResponse] (shapes) {
    setGlobal({ shapes })
    return this
  }
}

export default Busca
