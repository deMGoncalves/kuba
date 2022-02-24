import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Breadcrumb from './breadcrumb'
import Descricao from './descricao'
import More from './more'
import Nome from './nome'
import Shelf from './shelf'

export default () =>
  <Site>
    <Breadcrumb />
    <Fragment slot='main'>
      <Nome />
      <Shelf />
      <More />
      <Descricao />
    </Fragment>
  </Site>
