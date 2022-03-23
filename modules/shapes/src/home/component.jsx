import Breadcrumb from './breadcrumb'
import Filter from '@kuba/filter'
import h, { Fragment } from '@kuba/h'
import More from './more'
import Shelf from './shelf'
import Site from '@kuba/site'
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
