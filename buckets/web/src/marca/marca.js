import { paint } from '@kuba/h'
import { setGlobal } from '@kuba/global'
import { setDescription, setTitle } from '@kuba/markup'
import { redirectTo } from '@kuba/router'
import component from './component'
import setData from './setData'
import storage from './storage'

@paint(component)
@storage
class Marca {
  [storage.onError] () {
    redirectTo('marcas')
    return this
  }

  [storage.onResponse] (marca) {
    setTitle(marca.nome)
    setDescription(marca.descricao)
    setGlobal({ marca })
    setData(marca)
    return this
  }
}

export default Marca
