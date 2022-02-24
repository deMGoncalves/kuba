import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
class Shapes {
  #filter
  #page

  get description () {
    return 'Seja bem vindo! Descubra novas possibilidades para o seu role'
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
