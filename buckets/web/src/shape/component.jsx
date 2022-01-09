import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import Hgroup from '@kuba/hgroup'
import container from '@kuba/container'
import Site from '@kuba/site'
import schema from './schema'

export default (shape) =>
  <Site>
    <Fragment slot='hot'>
      <Breadcrumb paths={schema().breadcrumb} />
      <container.Section>
        <Hgroup>
          <Fragment slot='title'>{shape.title}</Fragment>
        </Hgroup>
        {shape.shelf}
      </container.Section>
    </Fragment>
    <Fragment slot='warm' />
    <Fragment slot='cold' />
  </Site>
