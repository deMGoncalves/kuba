import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import Site from '@kuba/site'
import Shelf from './shelf'
import schema from './schema.json'
import Title from './title'

export default () =>
  <Site>
    <Fragment slot='hot'>
      <Breadcrumb paths={schema.breadcrumb} />
      <Title />
      <Shelf />
    </Fragment>
  </Site>
