import Breadcrumb from './breadcrumb'
import Concave from './concave'
import container from '@kuba/container'
import Descricao from './descricao'
import Especificacao from './especificacao'
import Flares from './flares'
import Flex from './flex'
import h from '@kuba/h'
import Material from './material'
import Modelo from './modelo'
import Montagem from './montagem'
import Nose from './nose'
import Recortes from './recortes'
import Simetrico from './simetrico'
import Site from '@kuba/site'
import style from './style'
import Tail from './tail'
import Thumbnail from './thumbnail'
import Variacao from './variacao'
import Wells from './wells'

export default () =>
  <Site>
    <Breadcrumb />
    <container.Div className={style.compare__div} slot='main'>
      <Modelo />
      <Thumbnail />
      <Material />
      <Variacao />
      <Especificacao />
      <Nose />
      <Tail />
      <Concave />
      <Wells />
      <Flares />
      <Recortes />
      <Montagem />
      <Flex />
      <Simetrico />
      <Descricao />
    </container.Div>
  </Site>
