import h from '@kuba/h'
import container from '@kuba/container'
import Site from '@kuba/site'
import Breadcrumb from './breadcrumb'

export default () =>
  <Site>
    <container.Div slot='main' />
    <Breadcrumb />
  </Site>
