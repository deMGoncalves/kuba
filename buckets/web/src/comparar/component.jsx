import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import Site from '@kuba/site'
import Shelf from './shelf'
import schema from './schema.json'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Shelf />
    </Fragment>
    <Breadcrumb paths={schema.breadcrumb} />
  </Site>
