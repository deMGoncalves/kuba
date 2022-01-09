import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import Hgroup from '@kuba/hgroup'
import container from '@kuba/container'
import Site from '@kuba/site'
import schema from './schema'
import style from './style'

export default (shape) =>
  <Site>
    <Fragment slot='hot'>
      <Breadcrumb paths={schema().breadcrumb} />
      <container.Section className={style.shape}>
        <Hgroup>
          <Fragment slot='title'>{shape.title}</Fragment>
        </Hgroup>
      </container.Section>
    </Fragment>
    <Fragment slot='warm' />
    <Fragment slot='cold' />
  </Site>
