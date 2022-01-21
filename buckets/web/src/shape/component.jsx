import h, { Fragment } from '@kuba/h'
import Related from '@kuba/related'
import Site from '@kuba/site'
import Breadcrumb from './breadcrumb'
import Descricao from './descricao'
import Especificacao from './especificacao'
import Material from './material'
import Modelo from './modelo'
import style from './style'
import Thumbnail from './thumbnail'

export default () =>
  <Site className={style.shape__main}>
    <Fragment slot='main'>
      <Modelo />
      <Thumbnail />
      <Descricao />
      <Especificacao />
      <Material />
      <Related />
    </Fragment>
    <Breadcrumb />
  </Site>
