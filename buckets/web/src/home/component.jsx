import h, { Fragment } from '@kuba/h'
import Hero from './hero'
import Lazy from '@kuba/lazy'
import Site from '@kuba/site'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Hero />
      <Lazy require={() => import('./material' /* webpackChunkName: 'material' */)} />
      <Lazy require={() => import('./marca' /* webpackChunkName: 'marca' */)} />
      <Lazy require={() => import('./pro' /* webpackChunkName: 'pro' */)} />
    </Fragment>
  </Site>
