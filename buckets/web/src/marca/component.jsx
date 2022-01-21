import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Breadcrumb from './breadcrumb'
import Descricao from './descricao'
import Nome from './nome'
import Shelf from './shelf'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Nome />
      <Shelf />
      <Descricao />
    </Fragment>
    <Breadcrumb />
  </Site>
