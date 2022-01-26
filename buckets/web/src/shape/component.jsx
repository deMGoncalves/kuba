import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Breadcrumb from './breadcrumb'
import Descricao from './descricao'
import Especificacao from './especificacao'
import Material from './material'
import Modelo from './modelo'
import Relacionado from './relacionado'
import style from './style'
import Thumbnail from './thumbnail'
import Variacao from './variacao'

export default () =>
  <Site className={style.shape__main}>
    <Fragment slot='main'>
      <Modelo />
      <Thumbnail />
      <Descricao />
      <Variacao />
      <Especificacao />
      <Material />
      <Relacionado />
    </Fragment>
    <Breadcrumb />
  </Site>
