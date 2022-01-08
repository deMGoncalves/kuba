import h, { Fragment } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import Site from '@kuba/site'
import schema from './schema'

export default () =>
  <Site>
    <Fragment slot='hot'>
      <Breadcrumb paths={schema().breadcrumb} />
      /* pagina do shape aqui */
    </Fragment>
    <Fragment slot='warm' />
    <Fragment slot='cold' />
  </Site>
