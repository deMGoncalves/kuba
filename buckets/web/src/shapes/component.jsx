import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Shelf from './shelf'
import Title from './title'

export default () =>
  <Site>
    <Fragment slot='hot'>
      <Title />
      <Shelf />
    </Fragment>
  </Site>
