import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import { setGlobal } from '@kuba/global'
import jsonld from '@kuba/jsonld'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'
import data from './data'
import getMarca from './getMarca'

@paint(component)
@jsonld(data)
class Marca {
  @didMount
  async mount () {
    const { data: marca, error } = await getMarca()

    f.not(error) && (
      setTitle(marca.nome),
      setDescription(marca.descricao),
      setGlobal({ marca })
    )

    return this
  }
}

export default Marca
