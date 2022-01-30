import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import { setGlobal } from '@kuba/global'
import { setDescription, setTitle } from '@kuba/markup'
import { redirectTo } from '@kuba/router'
import component from './component'
import getMarca from './getMarca'
import Schema from './schema'

@paint(component)
class Marca {
  @didMount
  async mount () {
    const { data: marca, error } = await getMarca()

    f.not(error) && (
      setTitle(marca.nome),
      setDescription(marca.descricao),
      Schema.create(marca),
      setGlobal({ marca })
    )

    error && redirectTo('marcas')

    return this
  }
}

export default Marca
