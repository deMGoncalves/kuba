import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Shelf from './shelf'
import Title from './title'

export default (marcas) =>
  <Site>
    <Fragment slot='hot'>
      {marcas.breadcrumb}
      <Title />
      <Shelf />
    </Fragment>
  </Site>
