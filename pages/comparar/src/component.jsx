import Breadcrumb from './breadcrumb'
import container from '@kuba/container'
import Descricao from './descricao'
import Especificacao from './especificacao'
import h from '@kuba/h'
import Material from './material'
import Modelo from './modelo'
import Simetrico from './simetrico'
import Site from '@kuba/site'
import style from './style'
import Thumbnail from './thumbnail'
import Variacao from './variacao'

export default () =>
  <Site>
    <Breadcrumb />
    <container.Div className={style.compare__div} slot='main'>
      <Modelo />
      <Thumbnail />
      <Material />
      <Variacao />
      <Especificacao />
      <Simetrico />
      <Descricao />
    </container.Div>
  </Site>
