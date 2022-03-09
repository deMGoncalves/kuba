import h, { Fragment } from '@kuba/h'
import Lazy from '@kuba/lazy'
import Site from '@kuba/site'
import Material from './material'
import Relevantes from './relevantes'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Relevantes />
      <Material />
      <Lazy require={() => import('./marca' /* webpackChunkName: 'marca' */)} />
      <Lazy require={() => import('./pro' /* webpackChunkName: 'pro' */)} />
    </Fragment>
  </Site>
