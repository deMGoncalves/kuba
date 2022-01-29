import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import global, { setGlobal } from '@kuba/global'
import jsonld from '@kuba/jsonld'
import { setDescription, setTitle } from '@kuba/markup'
import action from './action'
import component from './component'
import data from './data'
import getShapes from './getShapes'

@paint(component)
@jsonld(data)
@action
class Shapes {
  #page = 0

  get description () {
    return 'Seja bem vindo! Escolha o melhor shape para o seu setup'
  }

  get title () {
    return 'Kuba'
  }

  @didMount
  async mount () {
    const { data: shapes, error } = await getShapes(++this.#page)

    f.not(error) && (
      setTitle(this.title),
      setDescription(this.description),
      setGlobal({
        shapes: [...global.shapes ?? [], ...shapes]
      })
    )

    return this
  }
}

export default Shapes
