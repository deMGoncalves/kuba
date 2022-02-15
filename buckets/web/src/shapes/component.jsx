import h, { Fragment } from '@kuba/h'
import ambient from '@kuba/ambient'
import Filter from '@kuba/filter'
import Site from '@kuba/site'
import More from './more'
import Shelf from './shelf'
import Title from './title'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Title />
      <ambient.Dev>
        <Filter />
      </ambient.Dev>
      <Shelf />
      <More />
    </Fragment>
  </Site>
