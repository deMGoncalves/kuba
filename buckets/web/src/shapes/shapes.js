import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import { setGlobal } from '@kuba/global'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'
import data from './data'
import storage from './storage'

@paint(component)
@jsonld(data)
@storage
class Shapes {
  get description () {
    return 'Seja bem vindo! Escolha o melhor shape para o seu setup'
  }

  get title () {
    return 'Kuba'
  }

  @didMount
  [f.dunder.mount] () {
    setTitle(this.title)
    setDescription(this.description)
    return this
  }

  [storage.onResponse] (shapes) {
    setGlobal({ shapes })
    return this
  }
}

export default Shapes
