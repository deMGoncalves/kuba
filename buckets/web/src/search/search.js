import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import { setGlobal } from '@kuba/global'
import jsonld from '@kuba/jsonld'
import { setDescription, setTitle } from '@kuba/markup'
import { args } from '@kuba/router'
import component from './component'
import data from './data'
import getShapes from './getShapes'

@paint(component)
@jsonld(data)
class Search {
  get description () {
    return 'Resultado de busca! Escolha o melhor shape para o seu setup'
  }

  get title () {
    return 'Busca'
  }

  @didMount
  async mount () {
    const { data: shapes, error } = await getShapes(args.q)

    f.not(error) && (
      setTitle(this.title),
      setDescription(this.description),
      setGlobal({ shapes })
    )

    return this
  }
}

export default Search
