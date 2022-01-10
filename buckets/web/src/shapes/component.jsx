import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Shelf from './shelf'

export default () =>
  <Site>
    <Fragment slot='hot'>
      <Shelf />
    </Fragment>
    <Fragment slot='warm' />
    <Fragment slot='cold' />
  </Site>