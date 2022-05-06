import * as f from '@kuba/f'
import { didMount, paint } from '@kuba/h'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'
import data from './data'
import jsonld from '@kuba/jsonld'

@paint(component)
@jsonld(data)
class Shapes {
  #filter
  #page

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
}

export default Shapes