import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Breadcrumb from './breadcrumb'
import Shelf from './shelf'
import Title from './title'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Title />
      <Shelf />
    </Fragment>
    <Breadcrumb />
  </Site>