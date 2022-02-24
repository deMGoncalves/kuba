import h, { Fragment } from '@kuba/h'
import Filter from '@kuba/filter'
import Site from '@kuba/site'
import Breadcrumb from './breadcrumb'
import More from './more'
import Shelf from './shelf'
import Title from './title'

export default () =>
  <Site>
    <Breadcrumb />
    <Fragment slot='main'>
      <Title />
      <Filter />
      <Shelf />
      <More />
    </Fragment>
  </Site>
