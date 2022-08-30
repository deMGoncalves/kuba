import Breadcrumb from './breadcrumb'
import h, { Fragment } from '@kuba/h'
import { Shelf, More } from '../home'
import Site from '@kuba/site'
import Title from './title'

export default () =>
  <Site>
    <Breadcrumb />
    <Fragment slot='main'>
      <Title />
      <Shelf />
      <More />
    </Fragment>
  </Site>
