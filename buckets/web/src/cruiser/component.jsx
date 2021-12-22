import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import Site from '@kuba/site'
import schema from './schema.json'

export default () =>
  <Site>
    <Fragment slot='hot'>
      <Breadcrumb paths={schema.breadcrumb} />
    </Fragment>
    <Fragment slot='warm' />
    <Fragment slot='cold' />
  </Site>
