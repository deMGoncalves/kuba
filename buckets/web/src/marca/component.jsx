import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Descricao from './descricao'
import Shelf from './shelf'
import Title from './title'

export default (marca) =>
  <Site>
    <Fragment slot='hot'>
      <Title />
      <Descricao />
      <Shelf />
    </Fragment>
    <Fragment slot='footer'>
      {marca.breadcrumb}
    </Fragment>
  </Site>
