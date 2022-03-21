import h, { Fragment } from '@kuba/h'
import Lazy from '@kuba/lazy'
import Relevantes from './relevantes'
import Site from '@kuba/site'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Relevantes />
      <Lazy require={() => import('./material' /* webpackChunkName: 'material' */)} />
      <Lazy require={() => import('./marca' /* webpackChunkName: 'marca' */)} />
      <Lazy require={() => import('./pro' /* webpackChunkName: 'pro' */)} />
    </Fragment>
  </Site>
