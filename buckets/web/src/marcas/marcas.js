import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import { setGlobal } from '@kuba/global'
import jsonld from '@kuba/jsonld'
import { setTitle } from '@kuba/markup'
import component from './component'
import data from './data'
import getMarcas from './getMarcas'

@paint(component)
@jsonld(data)
class Marcas {
  @didMount
  async mount () {
    const { data: marcas, error } = await getMarcas()

    f.not(error) && (
      setTitle('Marcas'),
      setGlobal({ marcas })
    )

    return this
  }
}

export default Marcas
