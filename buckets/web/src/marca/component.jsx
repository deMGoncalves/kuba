import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Breadcrumb from './breadcrumb'
import Descricao from './descricao'
import Shelf from './shelf'
import Title from './title'

export default () =>
  <Site>
    <Fragment slot='hot'>
      <Title />
      <Descricao />
      <Shelf />
    </Fragment>
    <Fragment slot='footer'>
      <Breadcrumb />
    </Fragment>
  </Site>
