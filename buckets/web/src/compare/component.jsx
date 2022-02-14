import h from '@kuba/h'
import container from '@kuba/container'
import Site from '@kuba/site'
import Breadcrumb from './breadcrumb'
import Concave from './concave'
import Descricao from './descricao'
import Flares from './flares'
import Material from './material'
import Modelo from './modelo'
import Montagem from './montagem'
import Nose from './nose'
import Recortes from './recortes'
import style from './style'
import Tail from './tail'
import Tamanho from './tamanho'
import Thumbnail from './thumbnail'
import Wells from './wells'
import Wheelbase from './wheelbase'

export default () =>
  <Site>
    <container.Div className={style.compare__div} slot='main'>
      <Modelo />
      <Thumbnail />
      <Material />
      <Tamanho />
      <Wheelbase />
      <Nose />
      <Tail />
      <Concave />
      <Wells />
      <Flares />
      <Recortes />
      <Montagem />
      <Descricao />
    </container.Div>
    <Breadcrumb />
  </Site>
