import Breadcrumb from './breadcrumb'
import h, { Fragment } from '@kuba/h'
import Shelf from './shelf'
import Site from '@kuba/site'
import Title from './title'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Title />
      <Shelf />
    </Fragment>
    <Breadcrumb />
  </Site>
