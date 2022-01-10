import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import container from '@kuba/container'
import Site from '@kuba/site'
import story from '@kuba/story'
import schema from './schema'

export default (shape) =>
  <Site>
    <Fragment slot='hot'>
      <Breadcrumb paths={schema().breadcrumb} />
      <story.Section>
        <container.Div>
          {shape.thumbnail}
          {shape.modelo}
          {shape.descricao}
          {shape.shelf}
        </container.Div>
      </story.Section>
    </Fragment>
    <Fragment slot='warm' />
    <Fragment slot='cold' />
  </Site>
