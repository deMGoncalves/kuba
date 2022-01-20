import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Shelf from './shelf'
import Title from './title'

export default (marcas) =>
  <Site>
    <Fragment slot='hot'>
      <Title />
      <Shelf />
    </Fragment>
    <Fragment slot='footer'>
      {marcas.breadcrumb}
    </Fragment>
  </Site>
