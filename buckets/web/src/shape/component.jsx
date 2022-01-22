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
import Zoom from '@kuba/zoom'

export default () =>
  <Site className={style.shape__main}>
    <Fragment slot='main'>
      <Modelo />
      <Thumbnail />
      <Descricao />
      <Especificacao />
      <Material />
      <Relacionado />
      <Zoom />
    </Fragment>
    <Breadcrumb />
  </Site>
