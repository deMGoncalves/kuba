import Breadcrumb from './breadcrumb'
import Descricao from './descricao'
import h, { Fragment } from '@kuba/h'
import More from './more'
import Nome from './nome'
import Shelf from './shelf'
import Site from '@kuba/site'

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
