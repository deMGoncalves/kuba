import h, { Fragment } from '@kuba/h'
import Breadcrumb from './breadcrumb'
import Shelf from './shelf'
import Site from '@kuba/site'
import Title from './title'

export default () =>
  <Site>
    <Breadcrumb />
    <Fragment slot='main'>
      <Title />
      <Shelf />
    </Fragment>
  </Site>
